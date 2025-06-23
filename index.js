//dom 5
//btn
let btn = document.getElementById("btn");
function handelClick() {
  alert("hello");
}
btn.addEventListener("click", handelClick);

setTimeout(() => {
  btn.removeEventListener("btn", handelClick);
  console.log("event listener canceled");
}, 1000);

//input
let input = document.getElementById("input");
function handelInput() {
  console.log(input.value);
}
input.addEventListener("input", handelInput);

// input.removeEventListener("input", handelInput);

/////////////// exercise
let bodyEl = document.querySelector("body");
let para = document.getElementById("para");
let btnn = document.getElementById("btnn");

let isbgclgrey = true;
function togglefun() {
  bodyEl.style.backgroundColor = isbgclgrey ? "blue" : "grey";
  isbgclgrey = !isbgclgrey;
}

btnn.addEventListener("click", togglefun);

para.addEventListener("mouseover", () => {
  btnn.removeEventListener("click", togglefun);
});
