// 2.1
let newDiv = document.createElement("div");
const currentDiv = document.querySelector("div.fn-insert-here");
document.body.insertBefore(newDiv, currentDiv);
// 2.2
let newDiv2 = document.createElement("div");
let newP2 = document.createElement("p");
let newContent2 = document.createTextNode("javascript");
newP2.appendChild(newContent2);
newDiv2.appendChild(newP2);
document.body.insertBefore(newDiv2, currentDiv);
// 2.3
for (let index = 0; index < 6; index++) {
  let newDiv3 = document.createElement("div");
  let newP3 = document.createElement("p");
  let newContent3 = document.createTextNode("Soy dinámico!");
  newP3.appendChild(newContent3);
  newDiv3.appendChild(newP3);
  document.body.insertBefore(newDiv3, currentDiv);
}
// 2.4
let newP4 = document.createElement("p");
let newContent4 = document.createTextNode("Soy dinámico!");
newP4.appendChild(newContent4);
document.body.insertBefore(newP4, currentDiv);
// 2.5
const currentH2 = document.querySelector("h2.fn-insert-here");
let h2Content = document.createTextNode("Wubba Lubba dub dub");
currentH2.appendChild(h2Content);
// 2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let newUl = document.createElement("ul");
let newContent6 = document.createTextNode("Soy dinámico!");
newUl.appendChild(newContent6);
for (const str of apps) {
  let newLi = document.createElement("li");
  let liContent = document.createTextNode(str);
  newLi.appendChild(liContent);
  newUl.appendChild(newLi);
}
document.body.insertBefore(newUl, currentDiv);
// 2.7
let removeClasses = document.querySelectorAll(".fn-remove-me");
for (const remove of removeClasses) {
  remove.parentNode?.removeChild(remove);
}
// 2.8
let newP8 = document.createElement("p");
newP8.appendChild(document.createTextNode("Voy en ,medio!"));
const currentDivs8 = document.querySelectorAll("div.fn-insert-here");
document.body.insertBefore(newP8, currentDivs8[1]);
// 2.9
const currentDivs9 = document.querySelectorAll("div.fn-insert-here");
for (const currentDiv9 of currentDivs9) {
  let newP9 = document.createElement("p");
  newP9.appendChild(document.createTextNode("Voy dentro!"));
  document.body.insertBefore(newP9, currentDiv9);
}
