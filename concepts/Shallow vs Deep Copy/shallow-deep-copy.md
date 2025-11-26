# Understanding `shallow` and `deep` copy in javascript


## 📌 Shallow copy

A shallow copy of an object is a copy whose properties reference the same values as the original, and nested objects are not duplicated but referenced.

**✅ Example 1(shallow copy) :**
```Javascript
const original = {
  name: "Kunj",
  details: { city: "Ahmedabad" }
};

const copy = { ...original };  // Shallow copy

copy.details.city = "Surat";

console.log(original.details.city);  // Surat (changed!)
``` 
`details` object is shared between both.

**✅ Example 2 (Mutation Example ):**
```Javascript
const original = {
    name: "Kunj",
    marks: [10, 20, 30, 40],
    details: { city: "Ahmedabad" }
};

const copy = { ...original };

copy.marks = [101, 102, 103, 104];

console.log(original.marks); // [ 10, 20, 30, 40 ] (not changed!)
```
Here :
- copy.marks → NEW array reference
- original.marks → OLD array reference

So they no longer point to the same array.
This is why original does NOT change. 

### ⚠️ But Mutating the Array *Does* Affect the Original

```javascript
copy.marks[0] = 100;

console.log(original.marks); // [ 100, 20, 30, 40 ] (changed!)
```
This is because :
- Mutating the existing object or array
- This WILL change original in shallow copy.

## 📌 Deep copy

A deep copy fully duplicates an object and all of its nested structures so that the original and copied values do not share references.

**✅ Example (Deep Copy):**
```Javascript
const original = {
  name: "Kunj",
  details: { city: "Ahmedabad" }
};

const deep = JSON.parse(JSON.stringify(original)); // Deep Copy

deep.details.city = "Surat";

console.log(original.details.city);  // Ahmedabad (not changed)
```

## 🌐 Real-World Usage

Use Shallow Copy when:

- You only need to clone **top-level** data
- Performance is important
- Example: copying simple objects **{name, age}**

Use Deep Copy when:

- Object has nested levels
- You don’t want mutations to affect the original
- Example: copying user settings, cart data, form objects, backend responses

## 🔹 Methods for Shallow Copy
Arrays:

- *array.slice()*
- [...array]

Objects:

- { ...object }
- Object.assign({}, object)

These do NOT deep copy nested objects.

## 🔹  Methods for Deep Copy

✅ 1. **JSON.parse(JSON.stringify(obj))**

⚠️ Doesn’t work for:

- Dates
- Functions
- Undefined
- Circular references

✅ 2. Structured Clone (Modern & Best)

```Javascript
const deep = structuredClone(original);
```

## Q : Does spread operator {...obj} create deep or shallow copy?
A : Shallow copy.

## Q : What are issues with JSON.stringify() for deep copy?
A : It ignores:

- functions
- undefined
- dates (converted to string)
- circular references

## Q : Why is deep copy expensive?
A : It involves recursive copying of every nested object → more time & memory.

## Q : Why JavaScript copies references?
A : JavaScript objects are stored in heap memory, and variables store a reference (pointer).

- Copying full objects every time would be slow → that’s why JS defaults to reference sharing unless explicitly deep copied.