//------Dates

const date = new Date();

const endDate = new Date();

//----get dates
//date object
//console.log(date);

//month of the year
const month = date.getMonth();

//hour of the day
const hour = date.getHours();

//minutes of the hour
const min = date.getMinutes();

//day of the week
const day = date.getDay();

//date of the month
const dateOfMonth = date.getDate();

//console.log(hour + ":" + min);

//-----set dates
endDate.setMonth(11);
//console.log(endDate.getMonth());

endDate.setHours(22);
//console.log(endDate.getHours());

//------Math

const num = 5.9;

//round to nearest integer
console.log(Math.round(num));

//round up to nearest integer
console.log(Math.ceil(num));

//round down to nearest integer
console.log(Math.floor(num));

//calculate square root
console.log(Math.sqrt(16));

//return a random number
console.log(Math.random() * 51);

console.log(Math.floor(Math.random() * 100) + 1);

const uniques = [];

while (uniques.length < 8) {
  const rand = Math.floor(Math.random() * 100) + 1;
  if (uniques.some((num) => num === rand)) {
    uniques.push();
  } else {
    uniques.push(rand);
  }
}

console.log(uniques);
