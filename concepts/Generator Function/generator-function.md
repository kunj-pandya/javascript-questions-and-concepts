# Understanding `Generator function` in JavaScript

A `generator function` is a function that can be paused and resumed, producing a sequence of values using the `yield keyword` and returning an iterator when invoked.

## ❓ How Generator Functions Look?
A generator function has a star:

```Javascript
function* generatorName() { ... };
```
Inside, you use:

```Javascript
yield value;
```
When you call a generator, it does not run immediately.
It returns a special object called an iterator.

You then control it using:

```Javascript
iterator.next()
```

**Example of generator function**

```Javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
const gen2 = numberGenerator();

console.log(gen); // Object[Generator] { }
console.log(numberGenerator); // [GeneratorFunction: numberGenerator]


console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

console.log(gen2.next()); //  {value: 1, done: false }
```

## Key Terms 

✅ yield
- Used inside generators
- Works like “pause here and return this value”

✅ next()
- Resumes generator from last yield
- Returns { value, done }

✅ Lazy evaluation
- Values are produced only when asked, not in advance.

✅ Iterable
- Generators automatically become iterables, so you can use:
```Javascript
for (const v of generator) {}
``` 

## 💡 Where Generators Are Used (Real-World Examples)
✅ 1. Infinite sequences
Example: infinite ID generator, infinite random numbers.

✅ 2. Pagination / Step-by-step fetching
API calls in batches.

✅ 3. Custom iteration logic
You can decide how iteration should behave.

✅ 4. Simulating async code
Before async/await, generators were used with promises to manage async tasks.

✅ 5. State machines
Useful for building logic that needs to move between states.


## Question and answer

### Q : What is the purpose of generator functions?
A: They allow pausing and resuming execution, making it possible to build custom iterators, lazy sequences, and step-by-step controlled logic.

### Q : What does yield do?
A: It pauses the generator and returns a value. Execution resumes from the next line when .next() is called.

### Q : What does .next() return?
A: An object:
```Javascript
{ value: <returned value>, done: <true or false> }
```

### Q : Are generators iterable?
A: Yes. Generators implement the iterator protocol and are iterable by default, so they work in for..of, spread ..., etc.

### Q : Difference between normal function and generator function?
```
| Normal Function                      | Generator Function                 |
| ------------------------------------ | ---------------------------------- |
| Runs completely once called          | Runs partially, pauses/resumes     |
| Returns only once                    | Returns multiple times via `yield` |
| No internal state saved after return | Maintains state between calls      |
| Uses `return`                        | Uses `yield`                       |
```

###  Q : create Infinite ID Generator using Generator function.
A : 
```Javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();

ids.next(); // 1
ids.next(); // 2
ids.next(); // 3
```