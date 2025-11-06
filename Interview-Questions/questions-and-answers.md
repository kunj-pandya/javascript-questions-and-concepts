
## Q : What is JavaScript? 
A :
- JavaScript is a high-level, dynamic, interpreted programming language that powers the interactive behavior of web pages.
 - It’s based on the ECMAScript specification and supports event-driven, functional, and object-oriented programming styles.
- With modern engines like V8 and environments like Node.js, JavaScript has evolved from a browser scripting language to a full-stack, general-purpose language used for building web, mobile, and even desktop applications.

- **Key Features :**

- `Interpreted` : Runs line by line in the browser or runtime (no need for compilation).
- `High-level` : Abstracts away complex details like memory management.
- `Dynamic typing` : Variables can hold different data types during runtime.
- `Prototype-based` : Uses prototypes instead of classical inheritance.
- `Single-threaded` : Uses one main thread, but supports asynchronous operations via the event loop.


## Q : What are the different data types in JavaScript?
A : 
- JavaScript has two main categories of data types:
-  **Primitive Types:**
    -  `string`: Sequence of characters.
    -   `number`: Numeric values (both integer and floating-point).
    -   `bigint`: For arbitrarily large integers.
    -   `boolean`: `true` or `false`.
    -   `undefined`: A variable that has been declared but not assigned a value.
    -   `symbol`: Unique and immutable primitive value.
    -   `null`: Represents the intentional absence of any object value.
-  **Reference Type (Object):**
    *   `object`: Collections of properties (including `Array`, `Function`, `Date`, `RegExp`, etc.).

## Q : What is the difference between `null` and `undefined`?
A :
-  `undefined` typically means a variable has been declared but not yet assigned a value. It's also the default return value of functions that don't explicitly return anything.
-   `null` is an assignment value. It can be assigned to a variable as a representation of "no value" or an intentional absence of any object value.


## Q : What are the possible ways to create objects in JavaScript?
A  : 
- There are many ways to create objects in javascript as mentioned below:

   - 1. Object literal syntax 
   - 2. Object constructor:
   - 3. Object's create method:
   - 4. Function constructor:
   - 5. Function constructor with prototype:
   - 6. Object's assign method:
   - 7. ES6 Class syntax:

### **1. Object literal syntax :**
The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

```javascript
    var object = {
    name: "Kunj",
    age: 23,
    };
```
Object literal property values can be of any data type, including array, function, and nested object.

Note: This is one of the easiest ways to create an object and it's most commonly used for creating simple, ad-hoc objects.

### **2. Object constructor :**
The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```javascript
    var object = new Object();
```

The Object() is a built-in constructor function so "new" keyword is not required for creating plain objects. The above code snippet can be re-written as:

```javascript
    var object = Object();
```

However, Object() can be used to either create a plain object or convert a given value into its corresponding object wrapper, whereas new Object() is specifically used to explicitly create a new object instance.


### **3. Object's create method :**
The create method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects. In other words, this is useful for setting up prototypal inheritance. The second argument is optional and it is used to create properties on a newly created object.

The following code creates a new empty object whose prototype is null.

```javascript
   var object = Object.create(null);
```

The following example creates an object along with additional new properties.

```javascript
    let vehicle = {
    wheels: "4",
    fuelType: "Gasoline",
    color: "Green",
    };

    let carProps = {
    type: {
        value: "Volkswagen",
    },
    model: {
        value: "Golf",
    },
    };

    var car = Object.create(vehicle, carProps);
    console.log(car);
```

### **4. Function constructor :**
In this approach, create any function and apply the new operator to create object instances. This was the main way to do constructor-based OOP before ES6 classes.

```javascript
    function Person(name) {
    this.name = name;
    this.age = 21;
    }
    var object = new Person("Kunj");
```

### **5. Function constructor with prototype :**
This is similar to function constructor but it uses prototype for their properties and methods. Using prototype means you're sharing methods/properties across instances, which saves memory and improve performance.

```javascript
    function Person() {}
    Person.prototype.name = "Kunj";
    var object = new Person();
```

This is equivalent to creating an instance with Object.create method with a function prototype and then calling that function with an instance and parameters as arguments.

```javascript
    function func(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    }

    var instance = new func(1, 2, 3);
```

### **6. Object's assign method :**
The Object.assign method is used to copy all the properties from one or more source objects and stores them into a target object. This is mainly used for cloning and merging

The following code creates a new staff object by copying properties of his working company and the car he owns.

```javascript
    const orgObject = { company: "XYZ Corp" };
    const carObject = { name: "Toyota" };
    const staff = Object.assign({}, orgObject, carObject);
```
### **7. ES6 Class syntax :**
ES6 introduces class feature to create objects. This is syntactic sugar over the prototype-based system.

```javascript
        class Person {
    constructor(name) {
        this.name = name;
    }
    }

    var object = new Person("Kunj");
```

## Q : What is a prototype chain?
A :
- `Prototype Chain`: The mechanism by which JavaScript objects inherit features from one another. When accessing a property on an object, if the property isn’t found directly on the object, JavaScript looks for it on the object’s prototype, and so on, until it reaches null. 

For objects created via constructor functions, the prototype chain starts with the instance, then refers to the constructor’s .prototype object, and continues from there. For example:

- **Example**
```javascript
function Person() {}
const person1 = new Person();

console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
```
- `Summary:`
- The prototype chain enables inheritance in JavaScript.
- If a property isn’t found on an object, JavaScript looks up its prototype chain.
- The prototype of an object instance can be accessed with Object.getPrototypeOf(obj) or __proto__.
- The prototype of a constructor function is available via Constructor.prototype.
- The chain ends when the prototype is null.


## Q : What is JSON and its common operations ?
A :
- `JSON (JavaScript Object Notation)` is a lightweight, text-based data format that uses JavaScript object syntax for structuring data. It was popularized by Douglas Crockford and is widely used for transmitting data between a server and a client in web applications. JSON files typically have a .json extension and use the MIME `type application/json`.

### Common Operations with JSON

1. Parsing: Transforming a JSON-formatted string into a native JavaScript object.

- **Example**
```javascript
    const jsonString = '{"name":"John","age":30}';
    const obj = JSON.parse(jsonString);  // { name: "John", age: 30 }
```

2. Stringification: Converting a JavaScript object into a JSON-formatted string, commonly used for data transmission or storage.

- **Example**
```javascript
const obj = { name: "Jane", age: 25 };
const jsonString = JSON.stringify(obj);  // '{"name":"Jane","age":25}'
```


## Q : What is the difference between == and === operators?
A :
- JavaScript provides two types of equality operators:

- Loose equality (==, !=): Performs type conversion if the types differ, comparing values after converting them to a common type.
- Strict equality (===, !==): Compares both value and type, without any type conversion.

### Strict Equality (===)

- Two strings are strictly equal if they have exactly the same sequence of characters and length.
- Two numbers are strictly equal if they have the same numeric value.
- Special cases:
- NaN === NaN is false
- +0 === -0 is true
- Two booleans are strictly equal if both are true or both are false.
- Two objects are strictly equal if they refer to the same object in memory.
- null and undefined are not strictly equal.

### Loose Equality (==)
- Converts operands to the same type before making the comparison.
- null == undefined is true.
- "1" == 1 is true because the string is converted to a number.
- 0 == false is true because false is converted to 0.

```
    0 == false            // true      (loose equality, type coercion)
    0 === false           // false     (strict equality, different types)
    1 == "1"              // true      (string converted to number)
    1 === "1"             // false     (different types)
    null == undefined     // true      (special case)
    null === undefined    // false     (different types)
    '0' == false          // true      ('0' is converted to 0)
    '0' === false         // false     (different types)
    NaN == NaN            // false     (NaN is never equal to itself)
    NaN === NaN           // false
    [] == []              // false     (different array objects)
    [] === []             // false
    {} == {}              // false     (different object references)
    {} === {}             // false
```

## Q : What is a first class function?
A :
- In JavaScript, `first-class functions`(first-class citizens) mean that functions are treated like any other variable. That means:

- You can pass a function as an argument to another function.
- You can return a function from another function.
- You can assign a function to a variable.
- This capability enables powerful patterns like callbacks, higher-order functions, event handling, and functional programming in JavaScript.

- For **example**, the handler function below is assigned to a variable and then passed as an argument to the addEventListener method.

```javascript
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
```