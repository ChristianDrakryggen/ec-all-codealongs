//flexible strings
const fname = "Christian";
let age = 31;

//traditional
const greeting = "Hi, my name is " + fname + " I'm " + age + "years old";
console.log(greeting);

//ES6
const greeting2 = `Hi, my name is ${fname}, I'm ${age} years old`;
console.log(greeting2);

//------array iteration-------//

const cars = ["Volvo", "Renault", "Audi", "Mazda"];

//foreach() - iterates over aarray and performs an action for every value
cars.forEach((value, index, array) => console.log(value, index, array));

/*cars.forEach((car) => {
  if (car === "Volvo") {
    alert("I'm swedish");
  } else {
    alert("I'm not swedish");
  }
});*/

//map() - iterates over an array and return a new array based on the original arrays values
const newCars = cars.map((car) => {
  return car.toUpperCase();
});

console.log(newCars, cars);

//map() - realistic example
const realCars = [
  { brand: "Volvo", model: "V60", year: 2020, country: "Swedish" },
  { brand: "BMW", model: "320d", year: 2018, country: "German" },
  { brand: "Audi", model: "A4", year: 2015, country: "German" },
];

const renderCars = realCars
  .map((car) => {
    return `<div><p>Brand: ${car.brand}</p><p>Model: ${car.model}</p></div>`;
  })
  .join("");

console.log(renderCars);

document.getElementById("car-list").innerHTML = renderCars;

//filter() - iterates over an array and returns a new array with values filtered out from the original array
const filteredCars = cars.filter((value) => value === "Volvo");
console.log(filteredCars);

const onlyGermanCars = realCars.filter((car) => {
  return car.country !== "German";
});
console.log(onlyGermanCars);

//remove cars with filter example
let removableCars = [
  { id: 1, brand: "Saab" },
  { id: 2, brand: "Volvo" },
  { id: 3, brand: "Ford" },
];

const removeCar = (id) => {
  removableCars = removableCars.filter((car) => car.id !== id);
  document.getElementById("removable-car-list").innerHTML = removableCars
    .map((car) => {
      return `<p onclick="removeCar(${car.id})">${car.brand}</p>`;
    })
    .join("");
};

document.getElementById("removable-car-list").innerHTML = removableCars
  .map((car) => {
    return `<p onclick="removeCar(${car.id})">${car.brand}</p>`;
  })
  .join("");

//array.reduce() - reduces an array of values to one value by iterationg over the array
//and adding the values to the total parameter after computing the value
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sumOfNumbers, num) => {
  return sumOfNumbers + num;
});

console.log(sum);

//shopping basket with prices and total price
const basket = [
  { name: "Chips", price: 20 },
  { name: "Pasta", price: 30 },
  { name: "Cola", price: 15 },
];

document.getElementById("products-list").innerHTML = basket
  .map((product) => {
    return `<p>Product: ${product.name}<br> Price: ${product.price} kr</p>`;
  })
  .join("");

const productPrices = basket.map((product) => product.price);
console.log(productPrices);

document.getElementById("total-price").innerHTML = `${productPrices.reduce(
  (totalPrice, price) => {
    return totalPrice + price;
  }
)} kr`;

//some() - iterates over array and returns either true or false depending
//on if any of the arrays values meets a certain condition
const fruits = ["Apple", "Orange", "Pear", "Kiwi"];

const result = fruits.some((fruit) => {
  return fruit === "Grape";
});
console.log(result);

const checkFruit = (passedFruit) => {
  if (fruits.some((fruit) => fruit === passedFruit)) {
    alert("That fruit exists!");
  } else {
    alert("Test another fruit!");
  }
};

checkFruit("Banana");

//------Sorting of arrays---------//
const stringArray = ["Pear", "Banana", "Apple", "Grape"];

const numbersArray = [234, 12, 5678, 9000, 100, 87];

const objectsArray = [
  {
    fname: "Christian",
    age: 31,
  },
  {
    fname: "Adam",
    age: 15,
  },
  {
    fname: "Sune",
    age: 72,
  },
  {
    fname: "Örjan",
    age: 72,
  },
  {
    fname: "Åke",
    age: 72,
  },
];

const sortedStrings = [...stringArray].sort();
console.log(sortedStrings);

const sortedNumbers = [...numbersArray]
  .sort((a, b) => {
    return a - b;
  })
  .reverse();
console.log(sortedNumbers);

const sortObjectByNumber = [...objectsArray].sort((a, b) => {
  return a.age - b.age;
});
console.log(sortObjectByNumber);

const sortObjectByStrings = [...objectsArray].sort((a, b) => {
  let x = a.fname.toUpperCase();
  let y = b.fname.toUpperCase();

  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(sortObjectByStrings);
