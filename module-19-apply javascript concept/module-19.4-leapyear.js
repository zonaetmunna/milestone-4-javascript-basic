function getLeapYear(year) {
     if (year % 4 == 0) {
          console.log("it is leap year");
     }
     else {
          console.log("it is not a leap year");
     }
}
const ammuNeed = getLeapYear(2012);
console.log(ammuNeed);