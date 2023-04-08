// Map
// It is used to iterate over the array
// It always return the same length of output array as input array
// It is used to apply logics(add, sub, mul, div)

var a = [4, 6, 9, 5, 3, 3, 3, 7, 4, 2, 26, 78, 54];
var result = a.map((item) => {
  return item * 2;
});

console.log(a);
console.log(result);

// varName.map((mapvarName)=>(
//     return mapvarName
// ))

var a = [4, 6, 9, 5, 3];
var z = a.map((abc) => {
  return `<p>${abc}</p>`;
});
console.log(z);

//Filter
// Filter is used to filter out the values
// It may or may not return the same length of output array as input array
// Filter only return those data for which output or condition is true

var a = [4, 6, 9, 5, 3, 3, 3, 7, 4, 2, 26, 78, 54];
var b = a.filter((data) => {
  return data > 30;
});
console.log(a);
console.log(b);

var a = [-1, 0, 1, 2];
var z = a.map((data) => {
  return data * 2;
});
console.log("Map", z);

var x = a.filter((data) => {
  return data * 2;
});
console.log("Filter", x);

//Callback -> when you call function inside an another function
a.map(() => {});
