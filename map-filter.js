// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output); //9,16,25,36,49,64


//shortcut way 
// map
const numbers = [3, 4, 5, 6, 7, 8];

// function square (element){
//     return element * element;
// }
//numbers.map(square);
// const square = element => element * element;
// const square = x => x * x;

//shortcut2
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// }) 

//shortcut3
// const result =  numbers.map(function(element){
//     return element * element;
// })

//shortcut4
const result = numbers.map(x => x * x);


console.log(result); //9,16,25,36,49,64


//filter
const bigger = numbers.filter( x => x > 5);
console.log(bigger);//6,7,8


//find
const isThere = numbers.find(x => x > 5);
console.log(isThere);

//map:map work in array and looping every-single element and give a result in array

//filter:filter work in condition then give result in array

//find:find give result only one element which come start