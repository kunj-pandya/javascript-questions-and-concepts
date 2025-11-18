## Q : Javascript program to Find the factorial of given number ?

```javascript
const findFactorial = (num) => {
if(num === 0 || num === 1){
    return 1;
}else{
    return num * findFactorial(num - 1);
}

};

console.log(findFactorial(4));
```

## Q : Find the factorial using Iterative Method.

```Javascript
const factorialIterative = (num) => {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(factorialIterative(4)); // 24
```