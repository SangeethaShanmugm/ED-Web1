// = // assignment
// == // compare the data
// === // compare data and datatype
var a = 10;
var b = "10";
var c = 20;

a == b; //compare the data
10 == "10";
true;
a === b; //compare data and datatype
false;

var a = "hii";
var b = "Hii";
a == b; // false
a === b; // false

a == c; //false
a === c; // true + false => false

var a = 20;
var b = 40;
a > b;
20 > 40; // false
b > a; // 40> 20=> true
a >= b;
20 >= 40; //false

// true => true
// false => false
// !true => false
// !false => true

a != b;
20 != 40;
true;

a !== b;
true;

var a = true;
!a; // !true=> false

var b = false;
!b; // true

var a = 1;
var b = 0;
!a; //false
!b; //true

var a = -1;
!a;
false;

var a = "Hii";
!a;
false;

// truthy => Any Number except 0 whether +ve or -ve , true, any string
// falsy=> 0, false, null, undefined
