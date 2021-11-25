//for loop

//basic usage
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//w3schools exempel
let text = "";

for (let i = 0; i < 10; i++) {
  text += "Värdet är: " + i + " ";
}

console.log(text);

//for loop och arrays
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Pear"];

/*for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/

const exoticFruits = [];
const domesticFruits = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple" || fruits[i] === "Pear") {
    domesticFruits.push(fruits[i]);
  } else {
    exoticFruits.push(fruits[i]);
  }
}

console.log(exoticFruits);
console.log(domesticFruits);

for (let i = 0; i < fruits.length; i++) {
  switch (fruits[i]) {
    case "Apple":
      console.log("Apples are great!");
      break;
    case "Banana":
      console.log("Bananas are great for a while!");
      break;
    default:
      console.log("Candy is better!");
  }
}

//for in - iterates over object properties

const person = {
  fname: "Christian",
  lname: "Johannesson",
  age: 31,
};

let personInfo = "";

for (let key in person) {
  personInfo += person[key] + " ";
}

console.log(personInfo);

let personInfo2 = "";

for (let key in person) {
  switch (key) {
    case "fname":
      personInfo2 += "Firstname: " + person[key] + "<br>";
      break;
    case "lname":
      personInfo2 += "Lastname: " + person[key] + "<br>";
      break;
    case "age":
      personInfo2 += "Age: " + person[key];
      break;
    default:
      console.log("No matching value!");
  }
}

document.querySelector("#text-box").innerHTML = personInfo2;

//for of - iterates over iterable datastructure, such as a string
const textValue = "JavaScript";

for (let val of textValue) {
  console.log(val);
}

//for of - realistic example
const greeting = "Hello, my name is Christian, I like JavaScript";

let greetingFormatted = "";

for (let val of greeting) {
  switch (val) {
    case ",":
      greetingFormatted += ", <br>";
      break;
    default:
      greetingFormatted += val;
  }
}

document.querySelector("#greeting-box").innerHTML = greetingFormatted;

//while - runs a block of code as long as a condition is true
let i = 4;

while (i < 5) {
  console.log(i);
  i++;
}

const dogs = ["Golden retriever", "Tax", "Border collie", "Schäfer"];

let j = 0;

/*while (j < dogs.length) {
  if (dogs[j] === "Tax") {
    alert("I'm a sausage");
  } else {
    alert("I like sausage");
  }
  j++;
}*/

//do while - same as while but runs block once before checking condition
let k = 0;

do {
  switch (dogs[k]) {
    case "Golden retriever":
      alert("I'm fluffy");
      break;
    case "Tax":
      alert("I'm fluffy sometimes");
      break;
    case "Border collie":
      alert("I'm fluffy too!");
      break;
    default:
      alert("Dogs are epic!");
  }
  k++;
} while (k < dogs.length);
