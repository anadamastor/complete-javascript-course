"use strict";

function logger() {
  // function body
  console.log("my name is Jonas");
}

// invoking-calling-running the function
logger();
logger();

// these are the parameters.
function fruitProcessor(applesNumber, orangesNumber) {
  const juice = `Juice with ${applesNumber} apples and ${orangesNumber} oranges`;
  return juice;
}

//these are the arguments
const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice);

function calculateSum(num1, num2) {
  return num1 + num2;
}

const sumTry = calculateSum(3, 5);
console.log(sumTry);

// 34 - DECLARATION VS EXPRESSIONS
function calAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age1 = calAge1(23);
console.log(age1);

// function expression - ANONYMOUS FUNCTION
const calAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};
const age2 = calAge2(1235);
console.log(age1, age2);

// ARROW FUNCTION - added in ES6
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(3434);
console.log(age3);

// arrow function with more stuff.

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2047 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Dereks"));
console.log(yearsUntilRetirement(1987, "Dewwreks"));

// FUNCTION WITHIN ANOTTHER FUNCTION
console.log(" ==============================§");
console.log(" functions within other functions ");
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessorSecond(applesNumber, orangesNumber) {
  const applePieces = cutFruitPieces(applesNumber);
  const orangePieces = cutFruitPieces(orangesNumber);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessorSecond(2, 3));

// REVIEWING FUNCTIONS
console.log(" ==============================§");
console.log("Function review");

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirementRev = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement}`;
  } else {
    return "you're already retired"
  }
};

console.log(yearsUntilRetirementRev(1999, "jonas"));
console.log(yearsUntilRetirementRev(1900, "mathis"));
