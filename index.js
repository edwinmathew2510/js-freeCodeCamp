//remove obj

const person = { name: "edwin", age: 18, city: "newyork" };

// delete person.name;

// console.log(person);

const { name, ...remaining } = person;

console.log(remaining);

//how to check an  obj has a property

const person1 = { name: "edwin", age: 18 };

console.log(person1.hasOwnProperty("name")); //method 1
console.log(person1.hasOwnProperty("city"));

console.log("name" in person1); //method 2
console.log("city" in person1);

console.log(person.name !== undefined); //method 3
console.log(person1.city !== undefined);
