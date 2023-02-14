// 4. freind
// bestFriend()
// input parameter give number
//return largest number of array

// function bestFriend() {
//      let friend = ["zonaet", "munna", "mu", "ru"];
//      for (let i = 0; i < friend.length; i++) {
//           let largest = 0;
//           if(friend.length>largest){

//           }

//      }
// }

let friend = ["zonaet", "munna", "mu", "ru"];
let largest = 0;
for (let i = 0; i < friend.length; i++) {
     if (friend[i] > largest) {
          largest = largest + friend[i];


     }
}
console.log(largest);
