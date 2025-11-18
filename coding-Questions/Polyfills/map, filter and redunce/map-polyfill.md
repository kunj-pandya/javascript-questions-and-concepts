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
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const result = [];
    const arr = this; //the array on which map is called.

    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            const mapedValue = callback.call(thisArg, arr[i], i, arr);
            result.push(mapedValue);
        }
    }

    return result;
}

console.log([1, 2, 3, 4, 5].myMap(x => x * 2)); // [ 2, 4, 6, 8, 10 ]
```

### Why check typeof callback === "function"?

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

### Why check arr.hasOwnProperty(i)?

- ✔️ To skip empty holes in sparse arrays

Example:

```Javascript
const a = [1, , 3];
```
- At index 1 → no value
- Real map skips it.

so this line: 

```Javascript
if (arr.hasOwnProperty(i))
```

Ensures behavior matches original map().

📌 hasOwnProperty is required because map() does NOT run on:

- Missing indexes
- Deleted items
- Holes created by commas


## Why use call() and not apply() or bind()?

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

## What is thisArg?
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