// somobahu triangle area

var arm1 = 3;
var arm2 = 3;
var area = .5 * arm1 * arm2;
console.log("The area of is:", area);



// bisom triangle area

let a = 21;
let b = 23;
let c = 20;
if (a + b > c && b + c > a && c + a > b) {
     let s = (a + b + c) / 2;
     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
     console.log("The are of traingle is:", area);
}
else {
     console.log("The traingle area is not posible");

}