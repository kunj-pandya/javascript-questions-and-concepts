# Understanding `Prototype Chain` in JavaScript

`Prototype Chain`: The mechanism by which JavaScript objects inherit features from one another. When accessing a property on an object, if the property isn’t found directly on the object, JavaScript looks for it on the object’s prototype, and so on, until it reaches null.

- Every object in JavaScript has a hidden property called `[[Prototype]]`, which refers to another object.
This other object is known as its prototype.

- When you try to access a property or method on an object, JavaScript will first check:
1. If that property exists on the object itself.
2. If not, it looks for it in the object’s prototype.
3. If not found there, it keeps looking up the chain — through each prototype — until it reaches `null`.
This chain of references is called the Prototype Chain.

- **Example**
```javascript
    const person = {
    greet() {
        return "Hello!";
    },
    };

    const student = Object.create(person);
    student.name = "Kunj";

    console.log(student.name); // Output: kunj (found directly on student)
    console.log(student.greet()); // Output: Hello! (found on prototype 'person')
    console.log(Object.getPrototypeOf(student) === person); // true
```

- Note :
- student doesn’t have a greet() method,
- So JavaScript looks into its prototype (person), finds it there, and executes it.

### JavaScript’s built-in prototypes form their own chains:

```javascript
let arr = [1, 2, 3];

    // arr inherits from Array.prototype
    console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

    // Array.prototype inherits from Object.prototype
    console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

    // Object.prototype inherits from null
    console.log(Object.getPrototypeOf(Object.prototype)); // null
```
- So the chain looks like this:

```
arr → Array.prototype → Object.prototype → null
```

| ❌ Wrong Concept                                  | ✅ Correct Understanding                                                                               |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Prototype chain is the same as class inheritance | They are related but not identical — prototype chain is JavaScript’s own inheritance system.           |
| `__proto__` and `prototype` are the same         | `__proto__` is the link to an object’s prototype, while `prototype` is a property on constructor functions. |
| Objects don’t inherit methods                    | All objects inherit from `Object.prototype` unless explicitly set otherwise.                          |

### Q : What is prototype ?
- A `prototype` is an object from which other objects inherit properties. It acts as a blueprint for other objects.

### Q : difference between __proto__ and prototype?
- `prototype`: Property of constructor functions.
- `__proto__`: Hidden link of every object pointing to its prototype.(the __proto__ property is often spoken as “dunder proto”, where “dunder” means “double underscore.”)

### Q : Can we break the prototype chain?
- Yes, by setting an object’s prototype to null.

```
const obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // null
```

### Q : Why is prototype chain important?
- It enables inheritance, code reuse, and method sharing between objects — a key part of JavaScript’s object model.