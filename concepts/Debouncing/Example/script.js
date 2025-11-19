let counter = 0;
const getData = function (event) {
    // calls an Api and gets the Data..
    console.log("fetching Data...", counter++, "Value:", this, this.value);


    // console.log("event:", event);          // actual event object
};


const debounce = (fn, delay) => {
    let timer;

    return function (...args) {

        clearTimeout(timer);  //Cancel previous timer

        timer = setTimeout(() => {  // Start new timer
            fn.apply(this, args); // Run the function after delay
            // console.log("args : ", args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);

document.getElementById("search").addEventListener("keyup", betterFunction);