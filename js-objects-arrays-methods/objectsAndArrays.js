//Objects

const car = {
  brand: "Ferrari",
  model: "Spider",
  year: 1995,
  fast: true,
  start: function () {
    alert("Wroooom!");
  },
};

console.log(car.fast);

//car.start();

//this

console.log(this);

const person = {
  name: "Christian",
  age: 31,
  showContext: function () {
    console.log(this);
  },
  greeting: function () {
    alert(
      "Hi, my name is " + this.name + " and I'm " + this.age + " years old"
    );
  },
  ageNextYear: function () {
    alert(this.age + 1);
  },
};

person.showContext();

//person.greeting();

//person.ageNextYear();

//Arrays

const cars = ["Volvo", "Renault", "BMW", "Mazda"];

console.log(cars);

console.log(cars[3]);

const persons = [
  {
    name: "Christian",
    age: 31,
    showContext: function () {
      console.log(this);
    },
    greeting: function () {
      alert(
        "Hi, my name is " + this.name + " and I'm " + this.age + " years old"
      );
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
  {
    name: "Carl",
    age: 28,
    showContext: function () {
      console.log(this);
    },
    greeting: function () {
      alert(
        "Hi, my name is " + this.name + " and I'm " + this.age + " years old"
      );
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
  {
    name: "Hans",
    age: 72,
    showContext: function () {
      console.log(this);
    },
    greeting: function () {
      alert(
        "Hi, my name is " + this.name + " and I'm " + this.age + " years old"
      );
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
];

console.log(persons);

console.log(persons[2].name);

persons[2].greeting();
