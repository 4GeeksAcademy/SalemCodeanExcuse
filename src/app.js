import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My friend ", "Batman ", "My Cat "];
let action = ["ate ", "sold ", "lost ", "broke "];
let what = ["my homework "];
let when = [
  "before I woke up",
  "while I was reading",
  "while I was coding",
  "during my lunch break",
  "while I was playing ukulele",
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}
//write your code here
document.getElementById("excuse").innerHTML =
  getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when);
