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
