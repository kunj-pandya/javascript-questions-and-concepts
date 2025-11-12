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

//  Q :  keep-duplicats case-insensitive for string. (e.g. "A" & "a" are same.)

function removeDup(arr) {
    const newArray = [...new Set(arr.map((item) =>
        item.toLowerCase()
    ))]
    return newArray;
}

console.log(removeDup(["APPLE", "BANANA", "banana", "apple"]));  // [ 'apple', 'banana' ]

//  Q :  Remove Duplicate without Set(). (using for loop.)

const removeDuplicatsArray = (array) => {
    let uniqueArray = [];

    for (let i = 0; i <= array.length - 1 ; i++) {
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
};

console.log(removeDuplicatsArray([5, 10, 15, 5, 20, 15])); // [ 5, 10, 15, 20 ]


// ------------------------------------------------------------------------------------------
