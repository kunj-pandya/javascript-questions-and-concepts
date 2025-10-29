# Understanding `this`, `call()`, `apply()`, and `bind()` in JavaScript

## What is `this`?

In JavaScript, `this` refers to the **object that is calling the function**.  
It is **dynamic**, meaning it depends on *how* the function is called — not where it was written.

---

### ✅ Example 1: When `this` works correctly

```javascript
const person = {
  name: "Kunj",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

person.greet(); // "Hello, Kunj"
```

### ❌ Example 2: When this gets lost

```javascript
    const greetFn = person.greet;
    greetFn(); // "Hello, undefined"
```

## Why `this` is Lost in `greetFn()`

### Explanation:

You took the function `person.greet` out of the object and stored it in a variable called `greetFn`.

Now, `greetFn` is just a **normal function**, not attached to any object.

---

### When you call `greetFn()`:

There’s **no object before the dot**, so JavaScript doesn’t know what `this` should refer to.

Therefore:

- In **strict mode** → `this = undefined`  
- In **non-strict mode** → `this = global object` (`window` in browsers, `global` in Node.js)

---

## Solution — `call()`, `apply()`, and `bind()`

These methods let you **manually tell a function who `this` should refer to**.

---

### 🔹 `call()`

**Definition:**

 Calls the function **immediately** and sets `this` manually.  
Arguments are passed **comma-separated**.

**Example:**
```javascript
const person = {
  name: "kunj",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFn = person.greet;

// ❌ Loses 'this'
greetFn(); // Hello, undefined

// ✅ Fix using call()
greetFn.call(person); // Hello, kunj
```

 **Memory Trick:**  
> **CALL → COMMA → Calls Immediately**
> **fn.call(thisArg, arg1, arg2, ...)**


### 🔹 `apply()`

**Definition:**

Calls the function **immediately** and sets `this` manually.  
The only difference from `call()` is that **arguments are passed as an array**.

**Example:**
```javascript
const person = {
  name: "kunj",
  introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
  }
};

const introFn = person.introduce;

// ❌ Loses 'this'
introFn("Ahmedabad", "India"); // Hi, I'm undefined from Ahmedabad, India

// ✅ Fix using apply()
introFn.apply(person, ["Ahmedabad", "India"]); // Hi, I'm kunj from Ahmedabad, India
```
 **Memory Trick:**  
> **APPLY → ARRAY → Calls Immediately**


### 🔹 `bind()`

**Definition:**

Does **not call** the function immediately.  
Instead, it **returns a new function** with `this` permanently bound to the specified object.

**Example:**
```javascript
const person = {
  name: "kunj",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFn = person.greet;

// ❌ Loses 'this'
greetFn(); // Hello, undefined

// ✅ Fix using bind()
const boundGreet = greetFn.bind(person);
boundGreet(); // Hello, kunj
```

**Memory Trick:**  
> **BIND → BACKUP → Call Later**


### Imagine you’re a chef 👨‍🍳 and have a universal “cook” function.

- call() → You borrow the cook function and cook now, saying who you are and what ingredients (comma-separated).
- apply() → Same, but you give ingredients as an array.
- bind() → You prepare a customized cook function for later use.
