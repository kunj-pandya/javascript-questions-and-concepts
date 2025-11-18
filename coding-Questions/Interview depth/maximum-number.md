## Q : Write a JavaScript program to find the Maximum number in an array ?

```Javascript
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Handle empty array case
    }

    max = arr[0]; // Initialize max with the first element

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

const numbers = [10, 2, 3, 5, 6, 7, 66, 88, 32, 34];

console.log("The maximum number is:", findMax(numbers)); // 88
```

## Q : Find Maximum using `Math.max(...arr)` (Spread Operator).

```Javascript
const numbers = [33, 2, 44, 65, 23, 54, 52, 55, 62];

const max = Math.max(...numbers);
console.log(max); // 65
```

## Q : Find Maximum using `reduce()`

```Javascript
const numbers = [33, 2, 44, 65, 23, 54, 52, 55, 62];

const max = numbers.reduce((acc, current) => {
    return current > acc ? current : acc;
}, -Infinity);

console.log(max);
```

### why we used `-Infinity` as initial value?
We use `-Infinity` because it is the smallest possible value in JavaScript.
This ensures that any number in the array—even negative numbers—will replace it during the first comparison. It also prevents errors for empty arrays since reduce requires an initial value.

## Q : Find Maximum using `recursion`

```Javascript
const numbers = [33, 44, 55, 12, 98, 78];

function findMaxRec(arr, index = 0, max = -Infinity) {
    if (index === arr.length) return max;
    return findMaxRec(arr, index + 1, arr[index] > max ? arr[index] : max);
}

console.log(findMaxRec(numbers)); //98
```
### What happens if we pass custom values for index or max?

**example:**

```javascript
findMaxRec(numbers, 4, 100)
```
Then:

- index starts at 4 instead of 0.
- So function starts checking from arr[4] onward.
- Initial maximum starts at 1000
- No element in array is > 1000
- So it returns 1000, which is WRONG

This is a `bug` unless the function is meant to search only part of the array.

The function depends on `default parameters` (index=0, max=-Infinity) to work correctly.

 If someone manually passes different values, the logic breaks because:
- A different index means the function starts scanning from the wrong position.
- A different max means the function may skip updating the maximum.
- So to make the function safe, it should NOT allow overriding these internal parameters.

### ♻ How to fix it?

```JavaScript
const numbers = [33, 44, 55, 12, 98, 78];

function findMaxRec(arr) {
  function helper(index, max) {
    if (index === arr.length) return max;
    return helper(index + 1, arr[index] > max ? arr[index] : max);
  }

  return helper(0, -Infinity);
}

console.log(findMaxRec(numbers));
```
- Default parameters like `index=0` and `max=-Infinity` are internal initialization values.
If the user manually passes values for them, the function behaves incorrectly.
To prevent this, we wrap the logic inside an inner helper function so that index and max cannot be overridden from outside.

✔️ Why this is better?

- User cannot pass wrong parameters.
- index and max are fully controlled internally.
- Cleaner, safer.