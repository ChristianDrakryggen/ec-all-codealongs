//--------String methods and properties

const firstname = "Christian";

//check string length
console.log(firstname.length);

//make all characters in string capitalized
console.log(firstname.toUpperCase());

//Transform string into array
const text = "Hejsan svejsan, jag heter Christian, Jag är 31 år gammal";
console.log(text.split(", "));

//replace sequence of characters with other sequence of characters
console.log(text.replace("Hejsan", "Tjosan"));

//------Number methods
const num = 5.5;

//convert a number to a string
console.log(typeof num.toString());

//remove decimals
console.log(num.toFixed());

//-------Array methods and properties

const cars = ["Volvo", "BMW", "Audi", "Ford", "Renault"];
console.log(cars);

//check length of array
console.log(cars.length);

//add value to end of array
cars.push("Mercedes");
console.log(cars);

//removes last value from array
cars.pop();
console.log(cars);

//sort array
//cars.sort();
//console.log(cars);

//reverse order of values in array
//cars.reverse();
//console.log(cars);

//Add a value to an array and "remove" another
cars.splice(1, 0, "Ferrari");
console.log(cars);

//-----Objects, add new properties
const dog = {
  breed: "Golden retriever",
  color: "White",
};

console.log(dog);

Object.assign(dog, {
  age: 2,
  name: "Luna",
});

console.log(dog);
