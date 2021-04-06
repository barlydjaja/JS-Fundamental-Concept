// create a new class Vehicle
function Vehicle(type, wheelNum) {
  this.type = type;
  this.wheelNum = wheelNum;

  console.log(`creating a new ${this.type}`);

  this.run = function () {
    console.log(`the ${this.type} runs on ${this.wheelNum} wheels`);
  };
}

Vehicle.prototype.PassangerNum = function (numberOfPassanger) {
  this.numberOfPassanger = numberOfPassanger;
  console.log(
    `this ${this.type} can only accomodate ${this.numberOfPassanger} people`
  );
};

let countToIndonesia = {
  one: "satu",
  two: "dua",
  three: "tiga",
  four: "empat",
  five: "lima",
};

let newObject = Object;

countToIndonesia["six"] = "enam";

console.log(countToIndonesia);
console.log(countToIndonesia["one"]);
console.log(countToIndonesia["six"]);

newObject["one"] = 1;
newObject["two"] = 2;

console.log(newObject.one);

// create a new class Car
function Car(brand, year) {
  Vehicle.call(this, "car", 4);
  this.brand = brand;
  this.year = year;
  console.log("creating a new class Car");
}

Car.prototype = Object.create(Vehicle.prototype);

let car = new Vehicle("car", 4);
let motor = new Vehicle("motor", 2);
let sedan = new Car((brand = "toyota"), (year = 2013));

console.log(sedan.brand);
console.log(sedan.year);
sedan.run();
sedan.PassangerNum(6);
