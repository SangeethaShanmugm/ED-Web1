function greet(name, callback) {
  console.log("Hi" + "" + name);
  callback();
}

//callback function

function callMe() {
  console.log("I am a callback function");
}

//passing function as an argument
greet("peter", callMe);

//promise

// 1. pending
// 2. fulfilled
// 3. rejected

const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is count value");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);

//.then => promiseObject.then(onFulfilled, onRejected)
let result = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});
result
  .then(function successValue(output) {
    console.log(output);
  })
  .then(function successValue1() {
    console.log("You can call multiple function");
  });
