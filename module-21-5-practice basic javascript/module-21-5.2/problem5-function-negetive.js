// 5. will stop the loop if the array has any negetive number and returns all positive number before the negetive number
// onlyPositive()

function onlyPositive(number) {
     let count = number[0];
     let element;
     for (let i = 0; i < number.length; i++) {
          let count = number[i];
          if (count.length == -1) {
               element = count;
          }

     }
     return element;

}
const Check = onlyPositive([12, 21, 12, 21, 12, 21, 21, 21, -1, 21]);
console.log(Check);