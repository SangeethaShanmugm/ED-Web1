//spread operator
const a1 = ["My", "name", "is", "Sangeetha"];

console.log(a1);
console.log(...a1);
console.log("My", "name", "is", "Sangeetha");

//copy the array value => spread operator -> ...varName
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four"];
console.log(arr2);

//rest parameter => use spread operator as argument

let a = function (...arr) {
  console.log(arr);
};

a(3);
a(4, 5, 6);

function add(a, b, c) {
  console.log(a + b + c);
}

const out = [1, 2, 3, 4];
add(...out); //6
