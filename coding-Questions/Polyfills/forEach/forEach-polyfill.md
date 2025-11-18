# Array.prototype.forEach()

---

## What is forEach()?

`forEach()` loops through each element of an array and executes a callback function.

- Does NOT create a new array
- Does NOT return anything (always returns undefined)
- Used only for side effects (logging, pushing values, updating variables)

The callback receives:

- value – current element
- index – position in array
- array – the original array

Unlike `map()`, `forEach()` cannot stop early and cannot return transformed values.


```Javascript
Array.prototype.myForEach = function (callback, thisArg) {
    if (this == null || this == undefined) {
        throw new TypeError("Cannot read property for 'ForEach'");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a fucntion");
    }

    let arr = Object(this);
    let len = arr.length >>> 0;

    for (let i = 0; i < len; i++) {
        if (i in arr) {
            callback.call(thisArg, arr[i], i, arr);
        }
    }
};

[1, 2, 3, 4, 5].myForEach(x => { console.log(x + 3) });

```