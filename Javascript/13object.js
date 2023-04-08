var a = {}; //object
var b = []; //Array

//object  = {key: value} pairs
var movie = {
  name: "Avengers",
  rating: 4.5,
  type: "Action",
};

console.log(typeof movie);

//dot notation

console.log(movie.name);
console.log(movie.rating);
console.log(movie.type);

console.log(movie);

console.log((movie.ind = "Hollywood"));
console.log(movie);

console.log((movie.type = "Animation"));
console.log(movie);
delete movie.ind;
//console.log(delete movie.ind);
console.log(movie);

//bracket notation

var movie = {
  name: "Avengers",
  rating: 4.5,
  type: "Action",
};

console.log(movie["name"]);
console.log(movie["rating"]);

//for in

for (key in movie) {
  console.log(key);
}

// name
// rating
// type

for (key in movie) {
  console.log(movie[key]);
}

// Avengers;
// 4.5;
// Action;

// json - Javascript object notation
// (Array of objects)

var data = [
  {
    name: "Avenger",
    rating: 4.5,
    type: "Action",
  },
  {
    name: "Frozen",
    rating: 5,
    type: "Animation",
  },
];

console.log(data[1]);
console.log(data[1].name);
console.log(data[1]["name"]);
