// for
// while
// do while
// for of
// for in (objects)

//it helps to iterate over the array as well as to print the series

// for(var, condition, operation(inc, dec)){

// }

// for (i = 0; i <= 5; i++) {
//   console.log(i);
// }

// var city = [
//   "Delhi",
//   "Mumbai",
//   "Helsinki",
//   "London",
//   "Amsterdam",
//   "Boston",
//   "Venice",
// ];

// for (i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

// // Delhi
// // Mumbai
// // Helsinki
// // London
// // Amsterdam
// // Boston
// // Venice

// for (i = 0; i < city.length; i++) {
//   console.log(`<p>${city[i]}</p>`);
//   console.log(`<h1>${city[i]}</h1>`);
// }

// var city = [
//   "Delhi",
//   "Mumbai",
//   ["Red", "Yellow", "Orange"],
//   "London",
//   "Amsterdam",
// ];

// for (i = 0; i < city.length; i++) {
//   if (Array.isArray(city[i])) {
//     for (j = 0; j < city[i].length; j++) {
//       console.log(city[i][j]);
//     }
//   } else {
//     console.log(city[i]);
//   }
// }

// Delhi
// Mumbai
// Red
// Yellow
// Orange
// London
// Amsterdam

//While loop

// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//do While loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//for of

var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];

// for (mycity of city) {
//   console.log(mycity);
// }

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "Yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (myColor of mycity) {
      console.log(myColor);
    }
  } else {
    console.log(mycity);
  }
}
