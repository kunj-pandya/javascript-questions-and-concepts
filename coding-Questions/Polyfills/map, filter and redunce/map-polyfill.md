# Array.prototype.map()
---

## What is map()?

`map()` creates a new array by applying a callback function to each element of the original array.
- Does not mutate the original array

Callback receives:

- value
- index
- array


## Map Polyfill
```Javascript
Array.prototype.myMap = function (callback, thisArg) {

    // Validate this
    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'map' of null or undefined");
    }

    // Validate callback
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    // Store result and array reference
    const result = [];
    const arr = Object(this); // convert to object
    const length = arr.length >>> 0;      // convert to Uint32
   
    // Loop through array
    for (let i = 0; i <length; i++) {

        // Skip holes / inherited keys
        if (i in arr) {

            // Execute callback with thisArg
            const mappedValue = callback.call(thisArg, arr[i], i, arr);

            // Push transformed value
            result.push(mappedValue);
        }
    }

    return result;
}

console.log([1, 2, 3, 4, 5].myMap(x => x * 2)); // [ 2, 4, 6, 8, 10 ]
```

### ⭐ Why do we check `this === null || this === undefined`?

- ✔️ To follow real JavaScript behavior

The real map() throws an error when used on null or undefined:

```Javascript
Array.prototype.map.call(null, fn)
// TypeError: Cannot read property 'map' of null
```

✔️ Prevents invalid operations

You cannot map over:

- null
- undefined

✔️ Required by ECMAScript spec
- Spec says: perform CheckNullOrUndefined step before doing anything.

📌 Without this check → polyfill gives the WRONG error message.

### ⭐ Why do we check typeof callback === "function"?

- ✔️ To match real map() behavior
- ✔️ If callback is not a function, then:

```Javascript
[1,2,3].map(10)
```
should throw:

```Javascript
TypeError: 10 is not a function
```
- ✔️ Prevents runtime errors
- ✔️ Mandatory to make your polyfill identical to real JS spec

### ⭐ Why do we do arr.length >>> 0?
✔ Converts length to a safe 32-bit unsigned integer

`>>>` 0 is the fastest way to perform the internal ToUint32 conversion.

This fixes weird lengths like:

```Javascript
arr.length = "5";     // string
arr.length = 3.7;     // float
arr.length = -10;     // negative
```

After applying:

```Javascript
arr.length >>> 0
```

you ALWAYS get a clean integer between 0 and 2^32 - 1.

✔️ EXACT same behavior as real `map()`

JavaScript array methods internally convert length using ToLength
which is implemented as ToUint32, same as >>> 0.

✔️ Prevents crashes and weird loops

Without this,polyfill breaks on:

- array-like objects
- DOM NodeList
- strings
- custom objects with numeric keys
- invalid or corrupted length values

📌 This step ensures correctness and full compatibility.

### ⭐ Why do we use `Object(this)` inside map() polyfill?

```Javascript
const arr = Object(this);
```
✔️ 1. Because this might NOT be a real array

Array methods can be used on:

- strings
- NodeList
- HTMLCollection
- arguments object
- objects with numeric keys
- typed arrays

**Example:**
```Javascript
Array.prototype.map.call("kunj", x => x.toUpperCase());
```

This works because "kunj" is converted into:

```Javascript
{ 0: "k", 1: "u", 2: "n", 3: "j", length: 4 }
```

Without Object(this) → your polyfill breaks.

✔️ 2. Primitive values cannot hold properties

Primitives like:

- "hello"
- 123
- true

cannot have properties directly.

But JavaScript auto-wraps them:

```Javascript
"abc".length
```

works because JS does internally:

```Javascript
Object("abc").length
```
polyfill must follow this behavior.


`Object(this)` 
- Converts any value into a safe object  
- Required by ECMAScript (ToObject step)  
- Makes map/filter work on strings and array-like objects  
- Handles primitives correctly  
- Prevents type errors and ensures compatibility  

## ⭐ Why do we check i in arr?

✔ To skip holes in sparse arrays
✔ To match real map() behavior exactly

Example:

```Javascript
const a = [1, , 3];
```

Index 1 is a hole, not undefined.
- map() must skip it.
- undefined is not skipped
- Only **missing indexes**

## ⭐ Why use call() and not apply() or bind()?

✔️ Why `call()`?

Because map needs to:

1. Set this inside the callback (using thisArg)
2. Pass multiple arguments individually:
```
(value, index, array)
```

so: 

```Javascript
callback.call(thisArg, arr[i], i, arr)
```

✔️ Why NOT `apply()`?

- apply(thisArg, [args]) expects an array.
- But map does not work with argument arrays.
(More overhead, not needed)

✔️ Why NOT `bind()`?

- bind() returns a new function, does NOT execute it.
- Map needs to execute callback immediately for each element.

So bind is wrong because:

```
bind → does NOT call the function
call → calls immediately with thisArg
```

## ⭐ What is thisArg?
`thisArg` defines what `this` should refer to inside the callback function. 

**Example**
```Javascript
const person = { name: "Kunj" };

[1, 2, 3].map(function (value) {
  console.log(this.name, value);
}, person);
```

**Output**
```Javascript
Kunj 1
Kunj 2
Kunj 3
```

- Inside callback:
this = person

- 📌 Important:
`Arrow functions` IGNORE thisArg because they do NOT have their own this.

## Using thisArg in example

```Javascript
const multiplier = { factor: 3 };

const ans = [1, 2, 3].myMap(function (x) {
    return x * this.factor;
}, multiplier);

console.log(ans);
```


## ⭐ Visual Call Stack Diagram
```
Global()
   ↓
arr.myMap()       <— myMap EC created
   ↓
callback()        <— callback EC created inside loop
   ↑ (destroyed after return)
myMap continues...
   ↓
callback()        <— new callback EC
   ↑
myMap continues...
   ↓
callback()        <— new callback EC
   ↑
myMap returns result
```