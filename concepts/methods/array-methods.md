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
