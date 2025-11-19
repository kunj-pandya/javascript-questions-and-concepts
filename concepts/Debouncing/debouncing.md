# Understanding `Debouncing` in JavaScript

`Debouncing` : Debouncing in Javascript can be defined as the technique that is used to limit the number of time a function gets executed.
- debouncing used where the event is Frequently being triggerd in short interval of time like typing in input field, resizing a window & scrolling.

**Example**

```Javascript
let counter = 0;
const getData = function (event) {
    // calls an Api and gets the Data..

    console.log("fetching Data...", counter++, "Value:", this, this.value);

    // console.log("event:", event); // actual event object
};

const debounce = (fn, delay) => {
    let timer;

    return function (...args) {

        clearTimeout(timer);  // Cancel previous timer

        timer = setTimeout(() => {  // Start new timer
            fn.apply(this, args); // Run the function after delay
            // console.log("args : ", args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);

document.getElementById("search").addEventListener("keyup", betterFunction);
```

- For example, when I use an input box and type ‘k-u-n-j’, the keyup event fires multiple times. But with debounce, only one function call runs after the user stops typing for around 300ms.

- In my implementation, I wrapped the original getData function inside a debounce function. Debounce stores a timer in a closure, clears the previous timer on every key press, and starts a new one. When typing stops, the timer completes, and the function finally executes.

- I used ...args because the browser passes the keyboard event into the event listener, and I need to capture it. And I use apply(this, args) because it preserves the correct this (the input element) and forwards the event correctly to the original function.

So debouncing helps avoid unnecessary function calls, improves performance, and prevents API spam.”

### Q : What events commonly need debouncing?
A:

- keyup/input
- resize
- scroll
- keypress
- mousemove

### Q : How does debouncing work internally?
A:
It uses:

- A timer stored inside a closure
- clearTimeout to cancel previous execution
- setTimeout to schedule the function
- Only last timer runs after the delay

### Q : Why do we use `...args`?
A: To capture all arguments (like event) passed to the debounced function, so we can forward them later.

### Q : Why use `apply(this, args)`?
A:
To preserve:

- correct this (input element)
- correct arguments (KeyboardEvent)

Without it:

- event becomes undefined
- this becomes window

### Q : What happens if we don’t use `...args`?
A: The original function does not receive the event or any parameters.

### Q : What happens if we don’t use `apply`?
A: this becomes window, and this.value becomes undefined.

### Q : What happens if the user keeps typing forever?
A:
- The function will never execute.
- The timer keeps resetting.

### Q : Can arrow functions be used inside debounce?
A: No, not as the main function, because arrow functions do NOT have their own this.
They break this.value.


### Q : What is the role of closures in debounce?
A: The timer variable is stored inside a closure so it persists across multiple calls of the returned function.

### Q : What if delay is 0?
A: Debounce will run the function as soon as typing stops, not while typing.

### Q : Can debounce handle asynchronous functions?
A: Yes. Debounce only controls when the function starts, not the async result.

### Q : Why is debounce important for API calls?
A: It prevents sending 10–20 requests every second when a user types—only the last request will run.

### Q : What will happen if args is an empty array?
A: The function receives no parameters → event becomes undefined.

### Q : What if we use fn() instead of apply?
A: The function loses both this and the event.