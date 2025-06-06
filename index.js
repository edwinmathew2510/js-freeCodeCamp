let color = [1, 2, 3, 4, 5, 6, 7];
console.log(color.includes(3, 2));

//shallow copy array

let num = [1, 2, 3];
let copy = [].concat(num);
console.log(copy);
console.log(copy === num);

//slice method (with out argument)
let num1 = [1, 2, 3];
let copy1 = num1.slice();
console.log(copy1);

//spread opeartor

let copy2 = [...num];
console.log(copy2);

const arr = ["o", "l", "l", "e", "h"];
console.log(arr.join(""));
