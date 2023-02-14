const names = ["aunna", "bunna", "cunna", "dunna", "eunna", "aunna", "bunna", "cunna"];

function getUnique(names) {
     const unique = [];
     for (const element of names) {
          console.log(element);
          if (unique.indexOf(element) == -1) {
               unique.push(element);
          }
     }
     return unique;
}
const uniqueNames = getUnique(names);
console.log(uniqueNames);