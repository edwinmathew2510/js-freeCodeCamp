//dom 10 , canvas, modal ,non-modal
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
console.log(ctx);

ctx.fillStyle = "darkblue";
// ctx.fillRect(1, 1, 200, 200);
ctx.font = "30px Aerial";
ctx.fillText("hello i am edwin", 1, 50);

////////////
// model dialog
let dialog = document.getElementById("modal");

let showBtn = document.getElementById("start");

let stopBtn = document.getElementById("stop");

showBtn.addEventListener("click", () => {
  dialog.show();
});

stopBtn.addEventListener("click", () => {
  dialog.close();
});
