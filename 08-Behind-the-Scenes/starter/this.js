'use strict';
console.log('--------------');

console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // returns UNDEFINED because inside a function
};

calcAge2(2221);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // returns WINDOW, as arrow functions use lexical this, its parent scope (window)
};

calcAgeArrow(2221);

console.log('------THIS WITHIN OBJECTS--------');

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // prints the object
    console.log(2034 - this.year); // this keyword rints the object
  },
};
jonas.calcAge();

console.log('--------------');

const matilda = {
  year: 2071,
};
matilda.calcAge = jonas.calcAge; //method borrowing!!!!!
matilda.calcAge(); // in here the this will be pointing to the object calling the method (matilda!!)

// we can take the method completely outisde of the object!!!!!!!!!
const f = jonas.calcAge;
f.calcAge(); // this return underfined. NOW F is only a regular function call, is not anymore an object hence this keyword within jonas method is undefined as it is not pointing anywehere.
