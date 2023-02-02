'use strict';

// ====================================================================
console.log('206. What is Object-Oriented Programming?');
// ====================================================================
// ====================================================================
console.log('207. OOP in JavaScript');
// ====================================================================
// ====================================================================
console.log('208. Constructor Functions and the new Operator');
// ====================================================================
// it is a normal function but called with "new" operator
// no arrow functions. This new functiom will create an object
const Person = function (firstName, birthYear) {
  console.log(this);
  //   Person[[Prototype]]: Object (step 1)
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('jonas', 1992); // new operator is quite interesting
const matilda = new Person('matilda', 23231); // new operator is quite interesting
console.log(jonas);
console.log(matilda);
// Person {firstName: 'jonas', birthYear: 1992}
// Person {firstName: 'matilda', birthYear: 23231}

console.log(jonas instanceof Person);
// true

// 1) a new empty object {} is created (because of new)
// 2) function is called, this ={}
// 3) {} linked to prototype
// 4) function automatically return {}

Person.prototype.calcAge = function () {
  console.log(2100 - this.birthYear);
};

jonas.calcAge();
// 108
console.log(jonas.__proto__ === Person.prototype);
// true

console.log(Person.prototype.isPrototypeOf(jonas));
// true
console.log(Person.prototype.isPrototypeOf(matilda));
// true
console.log(Person.prototype.isPrototypeOf(Person));
//false

Person.prototype.species = 'homo sapiens';
console.log(jonas.species, matilda.species);
// homo sapiens homo sapiens

console.log(jonas.hasOwnProperty('species'));
// false BECAUSE THIS IS SAVED IN THE PROTOTYPE NOT OBJECT
// ====================================================================
console.log('209. Prototypes');
// ====================================================================
// ====================================================================
console.log('210. Prototypal Inheritance and The Prototype Chain');
// ====================================================================
// ====================================================================
console.log('211. Prototypal Inheritance on Built-In Objects');
// ====================================================================
console.log(jonas.__proto__);
//Person
console.log(jonas.__proto__.__proto__);
//Object
console.log(jonas.__proto__.__proto__.__proto__);
// null

// Constructor property of a prototype will point back to the function itself.
console.dir(Person.prototype.constructor);

// PROTOTYPE OF ARRAYS
const arr = [2, 3, 4, 5, 4, 4, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
// true
console.log(arr.__proto__.__proto__);
// Object

// you can add a new set to the Array prototype: EXTENDING PROTOTYPE OF EXISTING PROTO - NO GOOD
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// (5) [2, 3, 4, 5, 6]

const h1 = document.querySelector('.h1');
console.dir(h1); // prototype here is HTMLElement, child of Element, child of Node, child of Object.

// also functions ave prototypes
console.dir(x => x + 1);

// ====================================================================
console.log('212. Coding Challenge #1');
// ====================================================================
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('bmw', 120);
const merc = new Car('mercedes', 95);

console.log(bmw.make);
console.log(bmw.speed);
console.log(bmw.brake());
console.log(bmw.accelerate());

console.log(merc.make);
console.log(merc.speed);
console.log(merc.brake());
console.log(merc.accelerate());

// ====================================================================
console.log('213. ES6 Classes');
// ====================================================================

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // this will be added to .prototype property
  calcAge() {
    console.log(2000 - this.birthYear);
  }

  get age() {
    return 2000 - this.birthYear;
  }

  // same property that already exists
  set fullName(name) {
    console.log(name);

    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}

// but can also do prototpy

PersonCl.prototype.greet = function () {
  console.log(`hello this is ${this.fullname}`);
};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// ====================================================================
console.log('214. Setters and Getters');
// ====================================================================
// Accessor properties: they are properties so do not need to run a property

// accessor with objects

const account = {
  owner: 'ervis',
  movements: [1, 23, 4, 5, 56, 3],

  // getters and setters
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// treat them as properties and not functions
console.log(account.latest);
// 3
account.latest = 23;
console.log(account.latest);
// 23

console.log(jessica.age);
console.log(jessica);

// ====================================================================
console.log('215. Static Methods');
// ====================================================================
// Created on the prototype and not on isntances, examples;
console.log(Array.from('hey')); // but cannot use on arrays
// (3) ['h', 'e', 'y'

// Person.hey = function () {
//   console.log('hey there');
//   console.log(this);
// };
PersonCl.hey();
// class PersonCl
// points to the Person prototype.
// ====================================================================
console.log('216. Object.create');
// ====================================================================
// Third way to create objects.

const PersonProto = {
  calcAge() {
    console.log(2000 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
// empty object
steven.calcAge();
// Nan

const carla = Object.create(PersonProto);
console.log(carla);
carla.init('carla', 1987);
// empty object
console.log(carla);
// {name: 'carla', birthYear: 1987}
// ====================================================================
console.log('217. Coding Challenge #2');
// ====================================================================
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarNew {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`after acceleration ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`after brake ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speedSet) {
    this.speed = speedSet * 1.6;
  }
}

const ferrari = new CarNew('Ferrar', 200);
ferrari.accelerate();
// after acceleration 210
ferrari.speedUS = 1000;
console.log(ferrari.speed);
//1600 - it get converted

// ====================================================================
console.log('218. Inheritance Between "Classes": Constructor Functions');
// ====================================================================
const PersonNew = function (firstName, birthYear) {
  console.log(this);
  //   Person[[Prototype]]: Object (step 1)
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2100 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear; // DRY
  // NEED TO CALL A FUNCTION AND SPECIFY THE THIS KEYWORD
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`Muy name is ${this.name} and I study ${this.course}`);
};
const mikle = new Student('MIke', 222, 'CS');
console.log(mikle);
// Student {firstName: 'MIke', birthYear: 222, course: 'CS'}
mikle.introduce();
// Muy name is undefined and I study CS

// ====================================================================
console.log('219. Coding Challenge #3');
// ====================================================================
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const CarDos = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarDos.prototype.accelerate = function () {
  this.speed -= 10;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed}% km/h, with a charge of ${this.charge}%`
  );
};

const ElectricCar = function (make, speed, charge) {
  // this is how you inherit from Cardos
  CarDos.call(this, make, speed);
  this.charge = charge;
  console.log(this);
};
// link prototypes
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`this car ${this.make}has beed charged to ${this.charge}`);
};

const carele = new ElectricCar('he', 200, 10);
// ElectricCar {make: 'he', speed: 200}

carele.chargeBattery(100);
//this car hehas beed charged to 100

carele.accelerate();
// ====================================================================
console.log('220. Inheritance Between "Classes": ES6 Classes');
// ====================================================================
// ====================================================================
console.log('221. Inheritance Between "Classes": Obj');
// ====================================================================
// ====================================================================
console.log('222. Another Class Example');
// ====================================================================
// ====================================================================
console.log('223. Encapsulation: Protected Properties and Methods');
// ====================================================================
// ====================================================================
console.log('224. Encapsulation: Private Class Fields and Methods');
// ====================================================================
// ====================================================================
console.log('225. Chaining Methods');
// ====================================================================
// ====================================================================
console.log('226. ES6 Classes Summary');
// ====================================================================
// ====================================================================
console.log('227. Coding Challenge #4');
