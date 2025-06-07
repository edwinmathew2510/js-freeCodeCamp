const person = {
  name: "bob",
  age: 12,
  sayHello: function () {
    return "hello " + this.name;
  },
};
console.log(person.sayHello());

//object () constructor

const num = 42;
const numobj = Object(num);
console.log(numobj);
console.log(typeof numobj);

let objnum = Object(42);
console.log(typeof objnum);
