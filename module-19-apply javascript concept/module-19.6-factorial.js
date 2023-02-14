function getFactorial(number) {
     let factorial = 1;
     for (let i = 1; i <= number; i++) {
          factorial = factorial + i;
     }
     return factorial;

}
const check1 = getFactorial(7);
console.log(check1);
