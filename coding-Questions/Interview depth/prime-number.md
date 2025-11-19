## Q : Write a JavaScript function to check if a given number is prime ?

```Javascript
function isPrime(number) {
    if (number <= 1) return false;

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(56)); // false
console.log(isPrime(23)); // true

```
⚠ But this is very slow for large numbers
because we also check **EVERY NUMBER**.

## Q : Write a JavaScript function to check if a given number is prime with The √n method.?

```Javascript
function isPrime(number) {
    if (number <= 1) return false; // negatives, 0, 1 are not prime
    if (number === 2) return true; // 2 is the only even prime
    if (number % 2 === 0) return false; // skip all even numbers


    for (let i = 3; i < Math.sqrt(number); i += 2) { // check only odd numbers
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(67)); // true
console.log(isPrime(45)); // false
console.log(isPrime(53)); // true
```

To check if a number is `prime`, we only check divisibility up to its square root because if a number has a factor larger than √n, the corresponding factor will be smaller than √n.
So checking up to √n guarantees correctness and reduces the complexity from O(n) to O(√n).
I also skip even numbers to further optimize the loop.