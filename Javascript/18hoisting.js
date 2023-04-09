// console.log(a, b);
// var a = 10;
// var b = 20;

// console.log(add(5, 5));

// function add(a, b) {
//   return a + b;
// }

//scope -  lifetime of a var

// let a = "Hello";

// function greet() {
//   console.log(a);
// }

// greet(); //"hello"

// -------------------------------------
let b = "Hi";

function greet() {
  b = 3;
  let c = "hey";

  console.log(c);
}

console.log(b);
greet();
console.log(b);

//var  - global scope
//let, const  - block scope {}

{
  let y1 = 10;
  var y2 = 20;
}

console.log(y2);

// not defined(error) vs undefined(value)

let name;
console.log(name);
console.log(typeof name);

///////////////////////////////////
//Shadowing
var price = 1000; //Pant

function getPrice() {
  console.log("The old price is", price); //1000
//   var price = 500; //MSD
  console.log("The New price is", price); //1000
}
getPrice();

console.log(a); //undefined
//1000 lines
var a = 50;
console.log(a); //50

//JIT - Just In Time Compilation

//2 phases
//1. compilation Phase
//2. Execution Phase

//JS, context

//1. compilation Phase
console.log(a); //skip
var a = 50; // JS -> Do you know a? No | What is the value -> context - undefined
console.log(a); //skip

//2. Execution Phase
console.log(a); // JS -> Do you know a? Yes | What is the value -> context -> undefined
var a = 50; // JS -> Do you know a? Yes | What is the value -> context - note -> 50
console.log(a); // JS -> Do you know a? Yes | What is the value -> context -> 50

//ex - 2

//1. compilation Phase
console.log(a); //skip
let a = 50; // JS -> Do you know a? No | What is the value -> context - dont initialize
console.log(a); //skip

//2. Execution Phase
console.log(a); // JS -> Do you know a? Yes | What is the value -> context -> Error
let a = 50; 
console.log(a);
