// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1


function factorial(n) {
     if (n == 1) {
          return 1;
     }
     return n * factorial(n - 1);
}
const myfactorial = factorial(7);
console.log(myfactorial);
