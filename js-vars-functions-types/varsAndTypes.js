//Variables

const firstname = "Christian";

let lastname = "Johannesson";

//console.log(lastname);

lastname = "Bengtsson";

//firstname = "Calle";

//console.log(firstname);
//console.log(lastname);

//Data types

//----Priamry

//string
const aString = "Hi I am a string";

//console.log(typeof aString);

//number
const aNumber = 10.5;

//console.log(typeof aNumber);

//boolean
let tired = false;

tired = !tired;

//console.log(tired);
//console.log(typeof tired);

//Undefined
let hungry;

//console.log(typeof hungry);

//Null
let nothing = null;

//att detta returnerar object är en bugg, null är av datatypen null!
//console.log(typeof null);

//----Advanced

//Object
const car = { name: "Volvo", model: "V60", year: 2021 };

//console.log(car.year + " " + car.model);

//console.log(typeof car);

//Array

//array of strings
const cars = ["Volvo", "BMW", "Peugeot", "Audi"];

//array of number
const numbers = [1, 4, 678, 56, 3];

//array of objects
const cars2 = [
  { name: "Volvo", model: "V60", year: 2021 },
  { name: "BMW", model: "320d", year: 2020 },
];

//console.log(cars);

//console.log(typeof cars);

//operators

//------Arithmetic operators

//add
//numbers
const sum = 5 + 5;

const value1 = 10;

const value2 = 5;

const sum2 = value1 + value2;

console.log(sum2);

//strings (specialare)
const stringOne = "Hejsan";

const stringTwo = "Hoppsan";

const greeting = stringOne + " " + stringTwo;

console.log(greeting);

//subtract
const diff = 10 - 5;

console.log(diff);

//multiply
const prod = 25 * 4;

console.log(prod);

//divide
const result = 20 / 2;

console.log(result);

//increase value by one
let aNumericValue = 10;
aNumericValue++;

console.log(aNumericValue);

//decrease by one
let anotherValue = 20;
anotherValue--;

console.log(anotherValue);

//------assignment operators

//assign a value to a variable
let value = 5;

console.log(value);

//Add a value to an existing value
value += 10;
// betyder samma som ovan => value = value + 10;

console.log(value);

let mutableString = "Hejsan";

console.log(mutableString);

mutableString += " hoppsan";
// betyder samma som ovan => mutableString = mutableString + " hoppsan"

console.log(mutableString);

//subtract a value from an existing
let subtractableValue = 10;

console.log(subtractableValue);

subtractableValue -= 5;
// betyder samma som ovan => subtractableValue = subtractableValue - 5

console.log(subtractableValue);

//Multiplication and division for assigning values works the same way
