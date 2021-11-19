//Booleans - truthy, falsy
let emptyString = "";
let zero = 0;
let nothing = null;
let notDefined;
let notANumber = NaN;

console.log(Boolean(notANumber));

let fname = "";

console.log(Boolean(fname));

/*if (!fname) {
  alert(fname);
}*/

//if, else, else if
const date = new Date();
const day = date.getDay();

console.log(day);

/*if (day === 6 || day === 0 || day === 5) {
  alert("Wohooo it's the weekend!");
} else {
  alert("Nooooooooooo");
}*/

const checkAge = (age) => {
  if (age >= 20) {
    alert("Du får gå till systemet!");
  } else if (age >= 18) {
    alert("Dyr krogöl");
  } else if (age >= 5) {
    alert("Coca cola");
  } else {
    alert("Mjölk eller vatten");
  }
};

//Switch
const findFruit = (fruit) => {
  const formattedFruit = fruit.toLowerCase();
  switch (formattedFruit) {
    case "apple":
      alert("We have apples!");
      break;
    case "pear":
      alert("We have pears!");
      break;
    case "orange":
      alert("We have oranges!");
      break;
    default:
      alert("We are sorry, we don't have that!");
  }
};

window.addEventListener("load", () => {
  document
    .getElementById("age-button")
    .addEventListener("click", () => checkAge(3));
  document
    .getElementById("fruit-button")
    .addEventListener("click", () => findFruit("aPpLe"));
});
