
const person = {
    name: "kunj",
    greet() {
        console.log(`hello, ${this.name}`);
    }
}
const greetFn = person.greet;
greetFn.call(person); // hello, kunj

// -----------------------------------------------

var employee1 = { name: "kunj" };
var employee2 = { name: "parth" };

function sayHello(greeting, emoji) {
    console.log(`${greeting}, ${this.name} ${emoji}`);
}


// ------------------------- call -------------------------
sayHello.call(employee1, "hello", "❗");
// Output: "Hi, kunj ❗"


sayHello.call(employee2, " hi", "❕");
// Output: "Hi, parth ❕"
// call() -> pass arguments comma-separated //calls immediately


// ------------------------- Apply -------------------------
sayHello.apply(employee1, ["Namste", "🙏"]);
// Output: "Namaste, kunj! 🙏"
// apply() -> pass arguments as an array


// ------------------------- Bind -------------------------
const greetKunj = sayHello.bind(employee1, "Hey", "👋");
greetKunj();
// Output: "Hey, Kunj 👋"
// bind() → does not call immediately, it returns a new function you can call later.

