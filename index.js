let hearts = document.querySelectorAll(".hearts");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
  });
});
