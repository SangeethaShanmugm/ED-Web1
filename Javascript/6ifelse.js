// if (condition) {
// } else {
// }

let a = 17;
if (a % 2 == 0) {
  console.log(`Number ${a} is even`);
} else {
  console.log(`Number ${a} is odd`);
}
//Number 10 is even
//Number 17 is odd

// let uname = "Jack";
// if (uname == "John") {
//   console.log(`Hi ${uname} you are admin`);
// } else if (uname == "Peter") {
//   console.log(`Hi ${uname} you are super admin`);
// } else {
//   console.log(`Hi ${uname} you are unknown`);
// }

let name = "John";
let role = "Super Admin";
if (role == "Admin") {
  // "Admin" == "Admin"
  if (name == "John") {
    console.log(`Hi ${name} you are admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
} else {
  if (name == "Peter") {
    console.log(`Hi ${name} you are super admin`);
  } else {
    console.log(`Hi ${name} you are unknown`);
  }
}

//tenary operator(single line if else)

condition ? if condition is true : if condition is false

var a  =10
a > 10 ? "Hii" : "Bye"
"Bye"

var a  =10
a == 10 ? "Hii" : "Bye"
"Hii"

var a  = 10
a > 10 ? a+1 : a-1
//10 > 10 => a-1 = 10 -1 => 9
9

var a  = 10
a== 10 ? a+1 : a-1
//a+1 => 10 +1 => 11
11