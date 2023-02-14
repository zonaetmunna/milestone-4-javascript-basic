// largest number among 3 number

let number1 = 10;
let number2 = 20;
let number3 = 30;
if (number1 > number2 && number1 > number3) {
     console.log("the largest number is", number1);
}
else if (number2 > number3 && number2 > number1) {
     console.log("the largest number is:", number2);

}
else {
     console.log("the largest number is ", number3);
}


// largest number between 2 number

let a = 3;
let b = 4;
if (a > b) {
     console.log("The largest number is:", a);

}
else {
     console.log("The largest number is:", b);

}


// function use largest number find among 3 number

function getlargestNumber(num1, num2, num3) {
     let a = num1;
     let b = num2;
     let c = num3;
     if (a > b && a > c) {
          console.log(a);
     }
     else if (b > c && b > a) {
          console.log(b)
     }
     else {
          console.log(c)
     }
}
getlargestNumber(1, 2, 3);

const motherChoice = getlargestNumber(4, 5, 6);
const fatherChoice = getlargestNumber(10, 11, 12);

