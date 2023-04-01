// String - "Aaa" "hii" 'cool' "57687" "5435jodsfj" `safjsdk`  "true"
// Number - 432 543543636 435.5455 .54646
// Boolean - true false

//es5
var a = "Hii";
var b = 10;
var c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

var d = "20";
console.log(typeof d);

var a = 10;
var b = 20;
console.log(a + b);
a - b; // 10 - 20 => -10
a * b; // 10 * 20 => 200
a / b; // 10 /20 => 0.5
b % a; // 20/10 => 0(mod)

5 % 2; //1
2 % 4; // 2
3 % 4; // 3

var a = "Hiii";
var b = "Javascript";

a + b(concat);
// "Hiii" + "Javascript" => "HiiiJavascript"

a - b; // NaN (Not a Number)-> error
a * b; // NaN
a / b; //NaN

// string +  string  = string
// string + number  = string
// number + string  = string
// number +  number  = number

"10" + 20 + 30;
"1020" + 30;
("102030");

10 + "20" + 30;
("102030");

10 + 20 + "30";
30 + "30";
("3030");

"10" + 20 + 30 - 1;
"1020" + 29;
("102029");

"10a" - 1;
NaN;

// true= 1
// false =0

true + true;
2;

true + false;
1 + 0;
1;

false + false;
0;

10 + true;
11;

"Hii" + true;
("Hiitrue");

"true" + "true";
("truetrue");

"true" - "true";
NaN;

var a = "30";
var b = "40";
a + b;
// "30"+"30" => "3030"
//convert string to int
parseInt(a);
// "30" => 30
parseInt(b);
// "40" => 40

parseInt(a) + parseInt(b);
// 30 + 40 => 70

parseFloat;
var a = "10.34";
var b = "20.11";
parseInt(a) + parseInt(b);
30;
parseFloat(a) + parseFloat(b);
30;

var a = "hi";
parseInt(a); // NaN

//es6

var a = "10.34";
var b = "20.11";
Number(a) + Number(b);
30.45;
