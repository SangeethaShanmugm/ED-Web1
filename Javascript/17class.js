class Person {
  constructor(name) {
    this.name = name;
  }
  //defining method
  greet() {
    console.log(`Say Hi to ${this.name}`);
  }
  //getter
  get personName() {
    return this.name;
  }

  //setter
  set personName(x) {
    this.name = x;
  }
}

//creating an object
const person1 = new Person("John");
const person2 = new Person("Jack");

console.log(person1.name);
console.log(person2.name);
person1.greet();

// person1.personName = "Peter";
// console.log(person1.name);
person1.name = "Peter";
console.log(person1.name);

//prototype - add property

class User {
  constructor() {
    (this.name = "John"), (this.age = 23);
  }
}

const user1 = new User();

User.prototype.gender = "male";
console.log(User.prototype);
console.log(user1.name);
console.log(user1.age);
console.log(user1.gender);

//objectName.prototype.key = "value"
