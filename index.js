//primitive data types

let num1 = 5;
let num2 = num1;
num1 = 10;
console.log(num2); // in prm data types chances applied to num1 will not be reflected in num2

//non- primitive data types

const person = { name: "edwin", age: 21 };
const person2 = person;
person.age = 30;
console.log(person2.age); //even person 2 is reference of person changes has reflected in both

