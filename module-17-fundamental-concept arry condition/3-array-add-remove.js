var friends = ['munna', 'rana', 'sagor', 'sakin', 'nayem'];
console.log(friends);

// 1 element add in array with push()
var add1 = friends.push('haider');
// console.log(friends);
// console.log(add1);

// 1 element reomve from array element with pop()
var remove1 = friends.pop('haider');
// console.log(friends);
// console.log(remove1);

// 1 element remove from beggainig of array with shift()
var remove2 = friends.shift('haider');
console.log(remove2);
// console.log(friends);

// 1 element add in beggaing of array with unshift()
var add2 = friends.unshift("jolil");
console.log(friends);