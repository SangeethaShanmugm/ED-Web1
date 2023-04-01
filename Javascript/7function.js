var a = 10;
var b = 20;
a + b;
30;
//es5
// keyword nameOfFunction(parameters){
//     return output
// }

function add(a, b) {
  //function definition /declaration
  return a + b;
}
console.log(add(10, 10)); //function call- arguments

console.log(add(50, 60)); //function call
console.log(add(90, 90)); //function call

function isEven(userInput) {
  let out;
  if (userInput % 2 == 0) {
    out = `Number ${userInput} is even`;
  } else {
    out = `Number ${userInput} is odd`;
  }
  return out;
}

console.log(isEven(10));

console.log(isEven(27));

//es6

function add(a, b) {
  return a + b;
}

//arrow function

//let add = (a, b) => a + b;

function double(a, b) {
  return a * b;
}

//let double = (a, b) => a * b;

const greet = () => console.log("Hello");

greet(); //"Hello"

let age = 50;
let welcome = age < 18 ? () => console.log("Baby") : () => console.log("Adult");

welcome();
