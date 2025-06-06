//nested object and accesing
const person = {
  name: "edwin",
  age: 18,
  contact: {
    email: "edwintm@gmail.com",
    phone: {
      laneno: 1234567890,
      mobno: 987654321,
    },
  },
};

console.log(person.contact.email);
console.log(person["contact"]["phone"]["mobno"]); //accesing nested object

const person1 = {
  name: "edwin",
  age: 18,
  address: [
    { country: "india", state: "kerala", city: "ekm" },
    { country: "america", state: "new jersy", city: "newyork" },
  ],
};
console.log(person1.address[0].city);
console.log(person1.address[1].state); // acccesing array-object values

//exersie
let person3 = {
  contact: {
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};
console.log(person3.contact.phone.work); //accesing work
console.log(person3["contact"]["phone"]["work"]);

let data = {
  results: [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 90 },
  ],
};

console.log(data.results[1].name);
