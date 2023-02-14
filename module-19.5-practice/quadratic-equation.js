let a = 1;
let b = 2;
let c = 3;
let d = Math.pow(b * 2) - 4 * a * c;
if (d > 0) {
     let x1 = (-b + Math.sqrt(d) / 2 * a);
     let x2 = (-b - Math.sqrt(d) / 2 * a);
     console.log("x1 and x2 is:", x1, x2);
}
else {
     console.log("Roots are imaginery");

}