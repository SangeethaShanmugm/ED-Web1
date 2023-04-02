// var uname = "niKitA";
// var uname = "niKitA";
// uname.toUpperCase();
// // "niKitA" => "NIKITA"

// uname.toLowerCase();
// // "niKitA" => "nikita"

// var city = "amsterdam";
// //a    m    s    t     e      r       d     a    m
// //1    2    3    4      5     6      7     8    9 => length
// //0    1    2    3     4      5      6     7    8 => index- position
// //-9  -8   -7    -6    -5    -4     -3    -2   -1
// city.length;
// 9;

// city[0];
// //a
// city[1];
// //m

// city.charAt(0);
// ("a");
// city.charAt(6);
// ("d");

// city.at(0);
// ("a");
// city.at(5);
// ("r");

// city.charAt(-1);
// ("");
// city.at(-1);
// ("m");
// city.at(-2);
// ("a");

// var a = "John";
// var b = "john";

// a == b;
// false;
// a.toLowerCase() == b.toLowerCase();
// // a => "John" => "john"
// // b => "john" => "john"
// //"john" == "john"
// true;

// //Slice
// //slice(starting_position, ending_position)
// var city = "Mumbai";
// // m      u     m     b     a       i
// // 0      1     2     3     4       5
// //-6    -5     -4    -3    -2     -1

// city(slice(1));
// ("umbai");
// city(slice(2));
// ("mbai");

// city(slice(2, 5));
// ("mba");
// city(slice(0, 4));
// ("mumb");
// city(slice(0, -1));
// ("mumba");

// city(slice(-2, 1));
// ("");

// city(slice(-2, -1));
// ("a");

// var city = "paRIs";

// city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
// //Paris
// city.length(); //5

// var cname = "  paRIs.  ";
// cname.length(); //10

// cname.trim(); // remove the white spaces and return the string

// var a = "I am learning Javascript";
// console.log(a.replace("Javascript", "JS")); // I am learning JS

// var a = "JavaScript I am learning Javascript";
// a.replace("Javascript", "JS");
// ("JavaScript I am learning JS");

// var a = "JavaScript I am learning JavaScript";
// a.replace(/JavaScript/g, "JS"); //g-global modifier
// ("JS I am learning JS");

var a = "https://github.com/SangeethaShanmugm?tab=repositories";
console.log(a);
console.log(a.split("/"));

var a = "https://github.com/SangeethaShanmugm/ED-Web1";
console.log(a);
console.log(a.split("/"));
console.log(a.split("/")[3], a.split("/")[4]);

var a = "JavaScript";
console.log(a.split(""));

var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log(b.toString()); //J,a,v,a,S,c,r,i,p,t
console.log(b.toString().replaceAll(",", "")); //JavaScript
