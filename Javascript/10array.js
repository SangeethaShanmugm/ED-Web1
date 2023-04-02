// array =[]
// It is a collection of homogenous and heterogenious data type

let a = ["Hii", "Hello", "test", "code", `hey`]; //Array of strings
let b = [4, 67, 4, 9, 1, 6, 84, 90]; // Array of Numbers
let c = [true, false, true, true, false]; //Array of boolean

let d = ["Hii", 84, true, 90, false, "hey", "text"];

var z = [4, 7, 8, 2];
console.log(typeof z); //object

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
//"Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"
// 0         1          2          3          4
city[0]; //"Delhi"
city[3]; //"London"

//Add- Boston
console.log(city.push("Boston"));
console.log(city);
//Add -Venice
city.push("Venice");
console.log(city);

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
console.log(city.pop());
console.log(city);
city.pop();
console.log(city);

// push - add at the end of Array
// unshift - add as first value in Array
// pop - remove last value always
// shift - remove first value always

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
city.unshift("Dubai");
console.log(city);
city.unshift("Paris");
console.log(city);

city.shift();
console.log(city);

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice'
//  0           1       2           3           4           5           6
city.slice(1)[
  ("Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice")
];
city.slice(2)[("Helsinki", "London", "Amsterdam", "Boston", "Venice")];
city.slice(2, 5)[("Helsinki", "London", "Amsterdam")];

//splice(startIndex, DeleteCount, values )

//remove 2 values from index 2
city.splice(2, 2)[("Helsinki", "London")];

city.splice(3, 0, "Pune", "Paris")[
  ("Delhi",
  "Mumbai",
  "Helsinki",
  "Pune",
  "Paris",
  "London",
  "Amsterdam",
  "Boston",
  "Venice")
];

city.splice(1, 1, "Innsburg", "Paris")[
  ("Delhi",
  "Innsburg",
  "Paris",
  "Helsinki",
  "Pune",
  "Paris",
  "London",
  "Amsterdam",
  "Boston",
  "Venice")
];

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "Pune",
  "Paris",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
console.log(city.indexOf("Helsinki")); //2

console.log(city.indexOf("London")); //5
console.log(city.indexOf("Boston")); //7
console.log(city.indexOf("Delhi")); //0

var x = ["a", "b", "c", 1];
var y = [2, "d", "e", "f"];
console.log(x + y);
// [("a", "b", "c", 1)] + [2, "d", "e", "f"];
//[("a", "b", "c", 1, 2, "d", "e", "f")];
//a,b,c,12,d,e,f
x.concat(y);
//["a", "b", "c", 1, 2, "d", "e", "f"]

y.concat(x);
//[2, "d", "e", "f", "a", "b", "c", 1]

var name = "Jack";
var z = [1, 2, 3];
Array.isArray(name); //false
Array.isArray(z); //true

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  ["Red", [1, 2, 3], "Yellow", "Orange"],
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

city[2]; //"Helsinki"
console.log(city[3]); 
//  ["Red", [1, 2, 3], "Yellow", "Orange"],
//      0      1          2         3
console.log(city[3][0]);
console.log(city[3][3]);
console.log(city[3][1]);
console.log(city[3][1][1]);