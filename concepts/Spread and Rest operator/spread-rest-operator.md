# Understanding `spread(...)` and `rest(...)` operator

- `spread(...)` extends value, `rest(...)` collects value.
- `spread` used in arrays, objects, functions calls; `rest` is used in fucntion parameters and destructruing.
- `spread` creates shallow copy not deep-copy.

##📌 `Spread(...)` Operator.

- The `Spread (...)`syntex allows an iterable(array, string etc..)or object to be expended where zero or more arguments or elements are expected.

❓ why we use `spread`?
- Copy arrays/objects (avoid mutation)
- marge array/objects
- pass array elements as arguments.
- avoid using `Object.assign or loops.

**⭐ Example 1:**

```Javascript
const friends = ["kunj", "parth"];
const moreFriends = [...friends, "vaibhav", "pranshi"];

console.log(moreFriends); // [ 'kunj', 'parth', 'vaibhav', 'pranshi' ]
```
**⭐ Example 2(copy object) :**

```Javascript
const user = { name: "kunj", age: 25 };
const updatedUser = { ...user, city: "Ahemdabad" };

console.log(updatedUser); // { name: 'kunj', age: 25, city: 'Ahemdabad' }
```

**⭐ Example 3(pass array function arguments) :**

```Javascript
function sum(a, b, c) {
    return a + b + c;
}

const arr = [1, 2, 3];

console.log(sum(...arr)); // 6
```

## `Rest(...)` Operator

- The `rest syntax( ...)` collects multiple arguments into an array and is used in function parameters or array/object destructuring.

**⭐ Example 1(Function With Unlimited Input):**

```Javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30, 40)); // 100
```

Rest operator gathers all arguments into one array.

**⭐ Example 2 (Destructuring):**

```Javascript
const [first, second, ...others] = ["Kunj", "Parth", "Vatsal", "Vaibhav"];

console.log(others); 
// ["Vatsal", "Vaibhav"]
```

### 🔥 Spread vs rest 
```
| Spread                                  | Rest                                       |
| --------------------------------------- | ------------------------------------------ |
| Unpacks values                          | Packs values                               |
| Used in arrays, objects, function calls | Used in function parameters, destructuring |
| Expands                                 | Collects                                   |
```

### Q : Spread or Rest? Identify carefully:
```Javascript
function test(...args) {
  console.log(args);
}

test(...[1, 2, 3]); // [1, 2, 3]
```
A:

- First `...args` = rest → packs values
- `Second ...[1,2,3]` = spread → expands values

### Q : What is the output?
```Javascript
const user = { name: "Kunj", details: { city: "Ahmedabad" } };
const copy = { ...user };

copy.details.city = "Surat";

console.log(user.details.city);
```
❗ Trick: Spread does shallow copy, not deep copy.

A:

✅ Output:
```Javascript
"Surat"
```

- Because details `object` was referenced, not cloned.

### Q : Can we use Rest in object destructuring?
```Javascript
const { name, ...other } = {
  name: "Parth",
  age: 22,
  city: "Vadodara",
};
```

A:

Yes, rest works in objects too.
other = { age: 22, city: "Vadodara" }

### Q : What happens if we use Rest not at the end?

```Javascript
const [a, ...rest, b] = [1, 2, 3, 4];
```
A:
❌ This gives error.
- Rest must always be the last element.

### Q : How is spread internally implemented?

A:
Spread operator under the hood uses iterators.

when we write:

```Javascript
[...arr]
```
Internally JavaScript does:

```Javascript
for (let item of arr) { ... }
```
So spread uses Symbol.iterator.

### Q : Why does spread cause shallow copy?
A:
- Because spread only copies top-level properties, not nested objects.
- Internally, it copies references for sub-objects.

### Q : Is spread faster than Object.assign?
A:
Yes, in most modern engines spread is faster and more optimized, but:
- Spread = easier readability
- Assign = used when customizing descriptors or cloning prototypes

### Q : Can Rest be used twice in a function parameter?
A:

❌ Impossible → SyntaxError
- Rest must be only once and last.

### Q : What is the main difference between:

```javascript
sum(...arr)
```

and :

```javascript
sum(arr)  
```
A:

- sum(...arr) sends individual values
- sum(arr) sends one array