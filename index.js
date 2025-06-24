//dom 7 ,settimeout, set interval

// setTimeout
let Timeout = setTimeout(() => {
  console.log("run after 3 sec");
}, 3000);

clearTimeout(Timeout); // cancel time out

// setInterval
let Interval = setInterval(() => {
  console.log("runs every 2 sec");
}, 2000);

setTimeout(() => {
  clearInterval(Interval);
}, 1000); //cancel intervel

////////////////
// exercise

let cancelButton = document.getElementById("Cancel-Button");
cancelButton.classList.add("highlight");

let interval = setInterval(() => {
  console.log("program is running");
}, 1000);

cancelButton.addEventListener("click", () => {
  clearInterval(interval);
  console.log("program cancelled");
});
