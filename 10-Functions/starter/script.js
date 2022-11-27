'use strict';
// ====================================================================
console.log('128 - Default parameters');
// ====================================================================
// No need to pass manual paramateters.

const bookings = [];
// With ES6 you can define default values here
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 + 1.3 + numPassenger // this can only be used because after numPassenger
) {
  //ES
  // numPassenger = numPassenger || 1; // falsy value? it will return 1
  // price = price || 199;

  const booking = {
    // use of short-circuiting to create default values
    flightNum, // enhanced object property declaration
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// {flightNum: 'LH123', numPassenger: undefined, price: undefined} set undefined because we did not specified
// once specified you can then use shortcirtuiting to fix default values as below:
// {flightNum: 'LH123', numPassenger: 1, price: 199}

// using the paramaters by default:
// {flightNum: 'LH123', numPassenger: 1, price: 201.3}

// in case you did not want to specify a parameter in the middle, you can use undefined.
// {flightNum: 'LH123', numPassenger: 1, price: 1000}

createBooking('LH123', undefined, 1000);
// {flightNum: 'LH123', numPassenger: 1, price: 1000}

// ====================================================================
console.log('129 - HOW PASSING PARAMATERS WORKS');
// ====================================================================
// Primitive vs Reference type variables.

const flight = 'LH234';

const jonas = {
  name: 'Ervis Lapi',
  passport: 1231231123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'MR ' + passenger.name;
  if (passenger.passport === 1231231123) {
    alert('Check in!');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonas);
// Check in!

console.log(flight);
// LH234 - this is a primitive, it is not changed from iniside the block
console.log(jonas);
// this is a referenced object, it's value has changed
// {name: 'MR Ervis Lapi', passport: 1231231123}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jonas);
checkIn(flight, jonas);
// Wrong Passport

// JS DOES NOT HAVE PASS BY REFERENCE - ONLY DOES PASS BY VALUE
// For objects however, the reference is still a value. It is a value that contains a memory address. We pass a reference to the function but we do not pass by reference.

// ====================================================================
console.log('130 - FIRST CLASS AND HIGHER-ORDER FUNCTIONS');
// ====================================================================
// JS treats functions as first-class citizens this means they are treaded as values and they are just another type of objects. We can store them in variables and object properties!!! We can also pass functions as arguments to other functions.
// WE CAN RETURN A FUNCTION FROM ANOTHER FUNCTION.
// There are also function methods that are called on functions such as bind().

// Having first class function means we can write higher-order functions. THese are function that receive another function as an argument, that returns a new functions or both.
// This is only possible because of first-class functions

// addEventListener is a higher order function that takes a function in. Callback because it will be called later by the function as soon as the click happens.
// Functions return also other functions. 

// First class function is a feature that a programming language has or not. It means that all functions are  values. This allows for higher-order functions to exist.

// ====================================================================
console.log('131 - FUNCTION ACCEPTING CALLBACK FUNCTIONS');
// ====================================================================

// ====================================================================
console.log('132 - FUNCTIONS RETURNING FUNCTIONS');
// ====================================================================

// ====================================================================
console.log('133 - THE CALL AND APPLY METHODS');
// ====================================================================

// ====================================================================
console.log('134 - THE BIND METHOD');
// ====================================================================

// ====================================================================
console.log('135 - CODING CHALLENGE 1');
// ====================================================================

// ====================================================================
console.log('136 - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS - IIFE');
// ====================================================================

// ====================================================================
console.log('137 - CLOSURES');
// ====================================================================

// ====================================================================
console.log('138 - MORE CLOSURES EXAMPLES');
// ====================================================================

// ====================================================================
console.log('139 - CODING CHALlENGE');
// ====================================================================
