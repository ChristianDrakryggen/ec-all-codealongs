class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  start() {
    return `Wrooom I'm a ${this.brand} from ${this.year}`;
  }
}

const volvo = new Car("Volvo", 2021);
console.log(volvo.year);
const volvoGreeting = volvo.start();
console.log(volvoGreeting);

//sub class
class CarModel extends Car {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }
  startModel() {
    return `${this.start()} and I'm a ${this.model}`;
  }
}

const v60 = new CarModel("Volvo", 2018, "V60");

console.log(v60);
console.log(v60.startModel());
console.log(v60.start());
