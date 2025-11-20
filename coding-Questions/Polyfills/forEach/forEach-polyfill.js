Array.prototype.myForEach = function (callback, thisArg) {

    if (this === null || this === undefined) {
        throw new TypeError("cannot read property 'forEach' of null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    let arr = Object(this);
    let len = arr.length >>> 0;

    for (let i = 0; i < len; i++) {
        if (i in arr) {
            callback.call(thisArg, arr[i], i, arr);
        }
    }

};

[1, 2, 3, 4, 5].myForEach(x => console.log(x + 2));