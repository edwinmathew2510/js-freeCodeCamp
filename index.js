// dom 2.1

//appedChild ( )
let contain = document.getElementById("container1");
let newElement = document.createElement("h1");
contain.appendChild(newElement).innerText = "its me";

// removeChild
let section = document.getElementById("testline");
section.removeChild(section.lastElementChild);

// remove last node on ul
let list = document.getElementById("list");
list.removeChild(list.lastElementChild);
//removes the last m=node in list d
list.appendChild((list.lastElementChild.innerText = "replaced"));
