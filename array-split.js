
const nums = [1,2,3,4,5,6,7,8];

const removed = nums.splice(2,3, 77);
// console.log(removed); //3,4,5,6,7 

// const part = nums.slice(2, 5);
// console.log(part); // 3,4,5

// console.log(nums);  //1,2,8(removed)

const together = nums.join("ami");
console.log(together); //1 2 77 6 7 8 //1ami2ami77ami6ami7ami8


//slice ='start' + 'end' index

//splice = 'start' + "how many delete count" + 'item include'

//join = attach elements