##  Q : Write a program to remove duplicats from an array.

```Javascript
const numbers = [1, 2, 3, 2, 1, 4, 3, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [ 1, 2, 3, 4, 5 ] 
```
- `Set` is Javascript object that only stores unique values
- using `Spread operator(...)` converts the set back to an Array.
- Works with both numbers and Strings- 
- `Another way` : return Array.from(new Set(numbers));

### Q : Remove duplicats with the use of `filter()` and `indexOf()`.

```Javascript
const num = [2, 4, 6, 2, 8, 6];

const removeDuplicats = num.filter((item, index) => {
    return num.indexOf(item) === index;
});

console.log(removeDuplicats); // [ 2, 4, 6, 8 ]
```
### Q : keep-duplicats case-insensitive for string. (e.g. "A" & "a" are same.)

```Javascript
function removeDup(arr) {
    const newArray = [...new Set(arr.map(item => 
        item.toLowerCase()))];
    return newArray;
}

console.log(removeDup(["apple", "BANANA", "Apple", "banana"]));
```