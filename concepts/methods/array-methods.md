# different `Array Methods` in Javascript


## What is `Array` ?

An array is a **special object** that stores a collection of values (like strings, numbers, objects, or even other arrays) in a single variable.

---

## Array Methods (Grouped by Use Case)

### **1. Adding or Removing Elements**

1. `Push()` : Add elements to the end of an array.

**Example**

 ```JavaScript
    const nums = [1, 2];
    nums.push(3);
    console.log(nums); // [1, 2, 3]
 ```

2. `pop()` : Removes the element from last.

**Example**

```JavaScript
    const nums = [1, 2, 3, 4];
    nums.pop();
    console.log(nums); // [1, 2, 3]
```

3. `unshift()` : Adds element at the begining.

**Example**

```javascript
    const nums = [1 , 2, 3];
    nums.unshift(0);
    console.log(nums); // [0, 1, 2, 3]
```

4. `shift()` : Removes the first element.

**Example**

```Javascript
    const nums = [0, 1, 2, 3];
    nums.shift();
    console.log(nums); // [1, 2, 3]
```

### **2. Searching Elements**

5. **`includes()`** : Checks if an array contains a value.

**Example**

```Javascript
    const tags = ["react", "node", "express"];
    console.log(tags.includes("node")); // true 
```

6. `indexOf()` : Find the index of given 

**Example**

```Javascript
    const tags = ["react", "node", "express"];
    console.log(tags.indexOf("node")); // 1 
```

7. `find()` : Finds the first element that satisfies the condition.

**Example**

```Javascript
   const users = [
    {name: "kunj", age:24},
    {name: "parth", age: 30},
    {name: "vaibhav",age: 28}
   ];

   console.log(users.find((user) => user.age > 25)); // {name: 'parth', age: 30}
```
- if not found returns -1


8. `findIndex()` : Same is find(),but returns the index insted of element

**Example**

```Javascript
   const users = [
    {name: "kunj", age:24},
    {name: "parth", age: 30},
    {name: "vaibhav",age: 28}
   ];

   console.log(users.findIndex((user) => user.age > 25)); // 1
```


### **3. Transforming Arrays**

9. `map()` : Creats a new Array by applying function to each element.

**Example**

```Javascript
    const nums = [1, 2, 3, 4, 5];
    const doubled = nums.map((num) => num * 2);
    console.log(doubled); //[2, 4, 6, 8, 10]
```

- **Use Case**: Transforming data (e.g., formatting user objects for frontend display).

10. `filer()` : Creats a new array with elemets that pass a test.

**Example** 

```Javascript
    const ages = [16, 22, 25, 28, 14];
    const adults =ages.filter((age) => age >= 18);
    console.log(adults); // [22, 25, 28]
```

11. `reduce()` : Reduce Array to a single value.

**Example**

```Javascript
    const numbers = [1, 2, 3, 4, 5];
    const total = numbers.reduce((acc,number) => acc + number, 0 );
    console.log(total); // 15
```

12. `forEach()`: Loops through elements(no return).

**Example**

```Javascript
    const arr = [2, 4,6 ];
    arr.forEach((num) => console.log(num * 2)); // 4 8 12
```


### **4. Sorting & Reversing**

13. `sort()` : Sorts elements in-pace as a string (be careful with the numbers).

**Example**

```Javascript
    const nums = [ 5, 10, 2];

    // nums.sort(); // [10, 2, 5] ❌

    console.log(nums.sort((a,b) => a - b )); //[2, 5, 10]
```

14. `revers()` : Reverses the array order in-place..

**Example**

```Javascript
    const letters = ["a", "b", "c"];
    letters.reverse(); // ['c', 'b', 'a']
```


### **5. Combining & Slicing Arrays**

15. `concat()` : Merges arrays.

**Example**

```Javascript
    const a = [1, 2];
    const b = [3, 4];
    const merged = a.concat(b); // [1, 2, 3, 4]
```

16. `slice()`: Returns a portion of the array (does not change the original).

**Example**

```Javascript
    const arr = [10, 20, 30, 40];
    const part = arr.slice(1, 3);
    console.log(part); // [20, 30]
```

17. `splice()`: Changes the array (adds/removes elements).

**Example**

```Javascript
    const arr = [1, 2, 3, 4];
    arr.splice(1, 2, 99, 100); // remove 2,3 and add 99,100
    console.log(arr); // [1, 99, 100, 4]
``` 


### 6. Conversion & Joining

18. `join()` : Joins all elements into a string.

**Example**

```Javascript
    const arr = ["React", "Node", "MongoDB"];
    console.log(arr.join(" - ")); // React - Node - MongoDB
```

19. `toString()` : Converts array to a comma-separated string.

**Example**

```Javascript
    [1, 2, 3].toString(); // "1,2,3"
```

### 7. Other Useful Methods 

20. `flat()` : Flattens nested arrays.

**Example**

```Javascript
    const arr = [1, [2, [3]]];
    console.log(arr.flat(2)); // [1, 2, 3]
```

21. `some() / every()` : 
    some() → at least one passes
    every() → all must pass

**Example**

```Javascript
    const arr = [10, 20, 30];
    console.log(arr.some((n) => n > 25)); // true
    console.log(arr.every((n) => n > 5)); // true
```

22. `from() and isArray()` :

**Example**

```Javascript
   Array.isArray([1, 2]); // true
    Array.from("Kunj"); // ['K', 'u', 'n', 'j']
```

### 🌐 Real-World Use Cases

| Method               | Example Use Case                     |
| -------------------- | ------------------------------------ |
| `map()`              | Transforming API response data       |
| `filter()`           | Filtering users or products          |
| `reduce()`           | Calculating totals (expenses, sales) |
| `find()`             | Searching a user by ID               |
| `some()` / `every()` | Validation checks                    |
| `splice()`           | Editing/removing items in a list     |
| `push()` / `pop()`   | Managing chat message history        |


- `map`, `filter`, `reduce`, `find` daily — these are functional programming methods.
- `forEach()` is great for side effects (logging, DOM manipulation).
- `slice()` is non-mutating, while `splice()` mutates.
- `map`, `filter`, `reduce` always return new arrays (great for immutability in React).


### 🚀 Quick Memory Pattern

| Action       | Method                             |
| ------------ | ---------------------------------- |
| Add / Remove | push, pop, shift, unshift, splice  |
| Search       | find, findIndex, includes, indexOf |
| Transform    | map, filter, reduce, forEach       |
| Combine      | concat, join                       |
| Slice / Copy | slice                              |
| Check        | some, every, isArray               |
| Flatten      | flat                               |
