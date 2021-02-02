// function sum(first, second){
//     let result = first + second;
//     console.log(result); //10
//     return result 
// }

// const output = sum (3, 7);
//console.log(result); //error
// console.log(output); //10

let bonus = 20;
function sum1(first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 9){
        var  mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky"
        // console.log(mood); //happy
    }
    // console.log(mood); //error
    // console.log(day);
    // var day = "friday";  //undefined
   
    var day = "friday";
    console.log(day); //friday 

    // let day = "friday";
    // console.log(day); //error
    return result;
}

const output1 = sum1 (3, 7);
// console.log(bonus); //30
// console.log(output1);  //20


//hoisting
// define hoisting in javascript
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

//Block scope
//define block scope in javascript
//A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

//Global scope
//define global scope in javascript
//A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.