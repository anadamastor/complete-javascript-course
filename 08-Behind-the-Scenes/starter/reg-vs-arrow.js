'use strict';
console.log('-----REG VS ARROW FUNCTION---------');

// var firstNamee = 'Matilda';

const jonas = {
  firstNamee: 'Ervis',
  year: 1991,
  calcAge: function () {
    console.log(this); // prints the object
    console.log(2037 - this.year);

    // SOLUTION 1 TO GET THIS INSIDE FUNCTION WITHIN METHOD
    // self = this;
    // const isMillenial = function () {
    // console.log(self);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // SOLUTION 2: convert normal function in arrow function which have access to the the parent this keyword.
    const isMillennial = () => {
      console.log('SOLUTION2');
      console.log(this); // returns the object
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial(); // this is a regular function call inside a method. The this keyword must be indefined here!
  },
  greet: () => console.log(`hey ${this.firstNamee}`), // this is undefined. An arrow function does not get its own this word will get it from the parent scope of the greet method. In this case it is global scope because objects do not have a variable scope.
  // But since Matilda is defined in global scope now it will return her name.
  // IN THIS CASE JUST USE A REGULAR FUNCTION
};

jonas.calcAge();
// console.log(this.firstName);

console.log('-----ARGUMENT keyword---------');
const addExpr = function (a, b) {
  console.log(arguments); // returns array of arguments fed to the function
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 5, 4); // you can have more arguments in here
var addArrow = (a, b) => {
  console.log(arguments); // arguments do not work with arrow functions
  return a + b;
};
