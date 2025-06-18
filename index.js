// for forEach method
let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number * 2);
// });

// numbers.forEach((number) => console.log(number * 2));

numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});

let words = ["hi", "hello", "hey"];
words.forEach((word, index, array) => console.log(word, index));
