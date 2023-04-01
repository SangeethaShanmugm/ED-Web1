var mname = "Avengers";
var type = "Action";
var category = "Hollywood";
var rating = 4.5;

//("An Avengers is an Action movie with rating as 4.5 and from category Hollywood");


//es5
var output = "An "+mname+" is an "+type+" movie with rating as "+rating+" and from category "+category+"."
console.log(output)

//es6 -> `` + ${}=> interpolation => template literals /string literals
var output = `An ${mname} is a ${type} movie with rating as ${rating} and from category ${category}`
console.log(output)