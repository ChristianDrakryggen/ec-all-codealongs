function greeting() {
  alert("Hejsan hoppsan");
  addValues(5, 10);
}

//greeting();

let sum;

function addValues(valueOne, valueTwo) {
  const greeting2 = "Hejsan";
  sum = valueOne + valueTwo;
  alert(sum + greeting2);
}

//return statement
function returnHello() {
  return "Hello";
}

function hello() {
  console.log("Hello there");
}

function calculate(valueOne, valueTwo) {
  return valueOne * valueTwo;
}

document.getElementById("product").innerHTML = calculate(25, 4);

//-----------------arrow functions

//regular function
function logStuff(stuff) {
  console.log(stuff);
}

//arrow function
const logMoreStuff = (stuff) => {
  return stuff;
};

//Single line arrow function
const logMoreStuff2 = (stuff) => stuff;

logStuff("Hello there");

const stuffKeeper = logMoreStuff("Hello stuff");
const stuffKeeper2 = logMoreStuff(
  "Hello stuff, I come from a single line arrow function"
);
console.log(stuffKeeper);
console.log(stuffKeeper2);
