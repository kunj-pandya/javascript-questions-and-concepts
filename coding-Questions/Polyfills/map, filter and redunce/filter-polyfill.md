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
    
    // Validate this
    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'filter' of null or undefined");
    }

    if(typeof callback !== "function"){
        throw new TypeError(callback + " is not a function");
    }

    const result = [];
    const arr = Object(this);        // ToObject 
    const length = arr.length >>> 0; // ToUint32 

    for(let i = 0; i < length; i++){

        // Skip holes
        if(i in arr){
        if(callback.call(thisArg, arr[i], i ,arr)){
            result.push(arr[i]);
        }
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


📝 Note

- All shared concepts like:
- Object(this)
- `>>>` 0
- skipping holes with i in arr
- callback.call
- thisArg

are already fully explained in the `map-polyfill` markdown,
so they are not repeated here to keep notes clean and readable.