Array.prototype.myMap = function (callback, thisArg) {
    if (this === null || this === undefined) {
        throw new TypeError("Can't read property 'map' of null and undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const result = [];
    let arr = Object(this);
    let len = arr.length >>> 0;

    for (let i = 0; i < len; i++) {

        if (i in arr) {
            const mappedValue = callback.call(thisArg, arr[i], i, arr);
            result.push(mappedValue);
        }
    }

    return result;
}

console.log([2, 3, 4].myMap(ele => ele * 2)); // [ 4, 6, 8 ]

