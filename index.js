//dom 9 , WAAPI,animate()
let square = document.getElementById("square");

let playBtn = document.getElementById("play-button");

let pauseBtn = document.getElementById("pause-button");

let animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000,
    direction: "alternate",
    easing: "ease-in-out",
    // iterations: Infinity,
  }
);

animation.onfinish = () => {
  console.log("animation has been stopped");
};

playBtn.addEventListener("click", () => {
  animation.play();
  console.log("animation has been started");
});

pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("animation has been paused");
});
