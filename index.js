//positioning substrings by index of

let str = "hi Edwin";
let position = str.indexOf("Edwin");
console.log(position);

//if deosnt find the substring

let str1 = "hi edwin";
let position1 = str1.indexOf("kevin");
console.log(position1); //prints value -1

let str2 = "hi edwin";
let position2 = str2.indexOf("edwin", 1);
console.log(position2); //prints value -1
