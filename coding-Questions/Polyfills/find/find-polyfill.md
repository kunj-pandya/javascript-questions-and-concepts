# Array.prototype.find()
---

## What is find()?

find() searches through an array and returns the first element that satisfies the callback condition.

- ✔️ Returns the first matching element
- ✔️ Stops as soon as a match is found (early exit)
- ❌ If no match → returns undefined
- ❌ Does NOT create a new array

The callback receives:

- value – current element
- index – position in array
- array – the original array

## ⭐ Key Behavior

- find() stops immediately on the first true condition
- Does not visit more elements after a match
- If nothing matches → undefined

```Javascript
Array.prototype.myFind = function (callback, thisArg) {

    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'find' of null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }


    arr = Object(this);
    len = arr.length >>> 0;

    for (let i = 0; i < len; i++) {

        if (i in arr) {

            value = arr[i];

            // If callback returns true → return this element
            if (callback.call(thisArg, arr[i], i, arr)) {
                return value;
            }
        }
    }

    // If no element found → return undefined
    return undefined;
};

let result = [1, 4, 8, 10, 4, 32, 45, 55].myFind(num => num > 10);

console.log(result);
```