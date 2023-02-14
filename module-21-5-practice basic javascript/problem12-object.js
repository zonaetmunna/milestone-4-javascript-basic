// 12. declared an object and change any property of that object



let student = { firstName: "munna", roll: 376462, bloodGroup: "0+" };
console.log(student);
student.roll = 3000;
console.log(student);
let removeItem = delete student["roll"];
console.log(student);
