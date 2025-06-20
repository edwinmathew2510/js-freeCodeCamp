//dom

//querySelectorAll
let family = document.querySelectorAll("ul.family li");
console.log(family);

//inner html
document.getElementById("container1").innerHTML =
  "<p>Hi, this is a new node!</p>";

//createElement()
// let newElement = document.createElement("h1");
// newElement.textContent = "hi newElement method";
// let containers2 = document.getElementById("container2");
// containers2.appendChild(newElement);

let newElement = document.createElement("h1");
newElement.textContent = "hi this new createElement()";
document.getElementById("container1").appendChild(newElement); //done by edw
