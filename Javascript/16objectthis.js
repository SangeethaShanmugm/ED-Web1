let firstName = "Michal";
let lastName = "Peter";

// let sayHi = {
//   firstName: "Joe",
//   lastName: "Lisa",
//   greet: function () {
//     return `Say Hi to ${firstName} ${lastName}`;
//   },
// };
// console.log(sayHi.greet());
//Say Hi to Michal Peter

//this -> to access the object properties

let sayHi = {
  //   firstName: "Joe",
  //   lastName: "Lisa",
  greet: function () {
    return `Say Hi to ${firstName} ${lastName}`;
  },
};
console.log(sayHi.greet());
//Say Hi to Joe Lisa
