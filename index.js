// event object
let button = document.getElementById("myButton");
button.addEventListener("click", function (event) {
  console.log("clicked");

  console.log(event.type); // type property

  console.log(event.target);

  console.log(event.preventDefault);
});
document
  .getElementById("inputField")
  .addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.keyCode);
  });
//mouse area
document
  .getElementById("mouseArea")
  .addEventListener("mousemove", function (event) {
    console.log("mouse y:" + event.clientY);
    console.log("mouse x:" + event.clientX);
  });

///form
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submission prevented");
});
//mouse enter &left

let hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseenter", function (event) {
  console.log("mouse Entered:", event.target);
});

hoverBox.addEventListener("mouseleave", function (event) {
  console.log("mouse left:", event.target);
});

//btn
let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  alert("you clicked");
});

//input
let input = document.getElementById("input");
input.addEventListener("input", function (event) {
  console.log(input.value);
});
