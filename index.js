// dom3, interfaces;

//navigator interface
console.log(navigator.userAgent);
console.log(navigator.language); //user preferred language

//window interface

console.log(window.innerWidth); //show thr inner width
console.log(window.location); // local url location

//document interface

console.log(document.children);

///////////////////////////////

//setAr-trributes

const para = document.getElementById("container1");
para.setAttribute("class", "class-1");
// class attribute is added

para.setAttribute("class", "example");
//class attribute is updated
