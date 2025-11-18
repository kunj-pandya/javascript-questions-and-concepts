## Q : Write a JavaScript program to find the maximum number in an array ?

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