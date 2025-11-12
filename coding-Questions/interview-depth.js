//  Q : Write a program to remove duplicats from an array.

const numbers = [1, 2, 3, 2, 1, 4, 3, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [ 1, 2, 3, 4, 5 ] 


// Q : Remove duplicats with the use of filter() and indexOf().

const num = [2, 4, 6, 2, 8, 6];

const removeDuplicats = num.filter((item, index) => {
    return num.indexOf(item) === index;
});

console.log(removeDuplicats); // [ 2, 4, 6, 8 ]

//  Q : Remove duplicats with the use of `filter()` and `indexOf()`.

function removeDup(arr) {
    const newArray = [...new Set(arr.map((item) => 
        item.toLowerCase()
    ))]
    return newArray;
}

console.log(removeDup(["APPLE", "BANANA", "banana", "apple"]));  // [ 'apple', 'banana' ]

// ------------------------------------------------------------------------------------------
