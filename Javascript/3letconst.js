var  => global variable => we can redeclare and reassign
let => we cannot redeclare but can reassign
const => we cannot redeclare nor reassign

var a  = 10
var a  => declaration
a = 10 => assignment

//redeclare
var a  = 10 //a => 10
var a = 20 // a = 20

//reassign
var a  = 10
a  =20 // a = 20

//let

let b = 20;
//b => 20
b = 30;
Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b);

const a = 10;
a = 20;
console.log(a);
Uncaught SyntaxError: Identifier 'a' has already been declared
Uncaught TypeError: Assignment to constant variable.
