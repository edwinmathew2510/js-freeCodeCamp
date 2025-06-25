//dom 8

// requestAnimationFrame
let box = document.getElementById("box");

let position = 0;
function animate() {
  position += 1;
  box.style.left = position + "px";

  if (position < 300) {
    requestAnimationFrame(animate);
  }
}
requestAnimationFrame(animate);

//loop animation

let box1 = document.getElementById("box1");
function loopBox() {
  position += 2;
  if (position > window.innerWidth) {
    position = 0;
  }
  box1.style.left = position + "px";

  requestAnimationFrame(loopBox);
}
requestAnimationFrame(loopBox);
