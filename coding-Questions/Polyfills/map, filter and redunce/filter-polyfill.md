# Array.prototype.filter()
---

## What is filter()?

`filter() `creates a new array containing only those elements from the original array for which the callback returns true. 

- Does not mutate the original array
- Returns a new filtered array
- Skips elements where the callback returns false

Callback receives:

- value 
- index 
- array 


## filter Polyfill

```Javascript
Array.prototype.myFilter = function(callback, thisArg){

    if(typeof callback !== "function"){
        throw new TypeError(callback + "is not a function");
    }

    const result = [];
    const arr = this;

    for(let i = 0; i < arr.length; i++){

        if(!arr.hasOwnProperty(i)) continue;

        if(callback.call(thisArg, arr[i], i ,arr)){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log([1,2,3,4,5].myFilter( x => x % 2 === 0));

/* 
const nums = [10,15,20,25,30,35,40,45,50];
const ans = nums.myFilter((x) => {
    return   x % 2 === 0;
})
console.log(ans);
 */

```

## 📌 Why do we use negative checking? (`!arr.hasOwnProperty(i)`)

Checks if index i actually exists as a real element inside the array.

- true → real element
- false → hole, inherited prop, or fake value

✔️ `!arr.hasOwnProperty(i)`

The ! (NOT) flips the result:

- Real element → `true` becomes `false`
- Not a real element → `false` becomes `true`

✔️ What does `continue` do?

- continue skips the rest of that loop iteration and moves to the next index.

So:
```Javascript
if (!arr.hasOwnProperty(i)) continue;
```

👉 If this index is NOT a real element, skip it and move to the next one.

🔥 Why is this needed?

Because we don't want to run callback on:

- missing elements
- inherited prototype keys
- non-numeric keys
- empty holes in arrays like [1, , 3]

**Example:**
```Javascript
const arr = [1, , 3];
arr.test = "hello";

for (let i in arr) {
  console.log(i); // prints: 0, 2, test  (bad!)
}
```
The negative check ensures we ignore 'test' and the empty hole.

## 📌 Filter Condition Explanation :

Inside filter(), we use:

```Javascript
if (callback.call(thisArg, arr[i], i, arr)) {
    result.push(arr[i]);
}
```

✔️ What happens here?

- The callback returns true → keep the element → add to result
- The callback returns false → ignore the element

✔️ Filter builds a new array with only “true” elements

**Example:**

```Javascript
[1, 2, 3, 4].filter(num => num > 2);
```
Result: [3, 4]