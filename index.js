let fruits = ["banana", "appel", "orange"];
console.log(fruits.indexOf("banana"));

//spilce  method

let fruits1 = ["apple", "jackFruit", "watermelon", "mango"];
fruits1.splice(1, 1, "stawberry");
console.log(fruits1);

let num = [1, 2, 3, 4, 5];
num.splice(1, 2, 6, 7, 8);
console.log(num);

//copy an array
let orginal = [1, 2, 3, 4, 5];
let copy = [...orginal];
copy.splice(2, 1, 7);
console.log(orginal);
console.log(copy);

let color = ["blue", "green", "red", "black"];
let indexColor = color.indexOf("green");
if (indexColor !== -1) {
  color.splice(indexColor, 1);
  console.log(color);
}

let numbers = [1, 2, 3, 4, 5];
numbers.splice(0);
console.log(numbers);
