//optional chaning (?)

const person = {
  name: "bob",
  profile: {
    email: "12345678@gmail",
    phone: {
      laneNo: 1234567890,
      mobileNo: 987654321,
    },
  },
};
console.log(person?.profile?.phone?.mobileNo);
console.log(person?.profile?.address);

let car = {
  brand: "Toyota",
  model: "Corolla",
};

console.log(car?.color);

let person2 = {
  name: "John",
  age: 30,
};

console.log(person2?.name);
