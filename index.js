//local storage

localStorage.setItem("name", "edwin");

localStorage.getItem("name");
console.log(myName);

localStorage.removeItem("name");

localStorage.clear();

///////////////////////////

let user = {
  name: "edwin",
  age: 23,
  theme: "dark",
};

localStorage.setItem("userData", JSON.stringify(user));

let savedUser = JSON.parse(localStorage.getItem("userData"));

console.log(savedUser.age);

//exercise

let favMovies = {
  movie1: "Titanic",
  movie2: "Sky high",
  movie3: "Terminator",
};
localStorage.setItem("favMoviesList", JSON.stringify(favMovies));
favMovies.movie1 = "Kgf";
