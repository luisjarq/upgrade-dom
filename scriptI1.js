// 1.1
let button = document.querySelector("button.showme");
console.log(button);
// 1.2
let h1 = document.querySelector("#pillado");
console.log(h1);
// 1.3
let p = document.querySelectorAll("p");
for (const pT of p) {
  console.log(pT);
}
// 1.4
let cPokemon = document.querySelectorAll(".pokemon");
for (const cP of p) {
  console.log(cP);
}
// 1.5
let tMe = document.querySelectorAll('[data-function="testMe"]');
for (const tM of tMe) {
  console.log(tM);
}
// 1.6
let t = document.querySelectorAll('[data-function="testMe"]');
if (t.length >= 2) {
  console.log(t[2]);
}
