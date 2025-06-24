//dom 6 , style ,class list
let para = document.getElementById("para");
para.style.color = "red";

let paraEl = document.getElementById("paraa");
paraEl.classList.add("highlight");
// paraEl.classList.remove("highlight");// to remove

let toggleBtn = document.getElementById("tooglebtn");
let menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

//////////////////
