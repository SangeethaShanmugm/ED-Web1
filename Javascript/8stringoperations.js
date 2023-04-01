var uname = "niKitA";
var uname = "niKitA";
uname.toUpperCase();
// "niKitA" => "NIKITA"

uname.toLowerCase();
// "niKitA" => "nikita"

var city = "amsterdam";
//a    m    s    t     e      r       d     a    m
//1    2    3    4      5     6      7     8    9 => length
//0    1    2    3     4      5      6     7    8 => index- position
//-9  -8   -7    -6    -5    -4     -3    -2   -1
city.length;
9;

city[0];
//a
city[1];
//m

city.charAt(0);
("a");
city.charAt(6);
("d");

city.at(0);
("a");
city.at(5);
("r");

city.charAt(-1);
("");
city.at(-1);
("m");
city.at(-2);
("a");

var a = "John";
var b = "john";

a == b;
false;
a.toLowerCase() == b.toLowerCase();
// a => "John" => "john"
// b => "john" => "john"
//"john" == "john"
true;
