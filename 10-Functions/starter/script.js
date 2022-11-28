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

// checkIn(flight, jonas); // turned off because annyoing
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
// checkIn(flight, jonas); // turned off, is annyoing
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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  // rest pattern
  const [first, ...others] = str.split(' ');
  // destructuring
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string :${str}`);
  console.log(`Transformed string :${fn(str)}`);

  // functions have their own methods and properties. Below you can find the name of that function.
  console.log(`Transformed by: ${fn.name}`);
};
// calling the higher order function I want to transform the string below using the upperFirstWord function passed as a parameter. We are not calling that function
transformer('Javascript is the best', upperFirstWord);
// Original string :Javascript is the best
// Transformed string :JAVASCRIPT is the best
// Transformed by: upperFirstWord

// callback-functions because we do not call them ourselves but is the higher end function calling it when needed.
transformer('Javascript is the best', oneWord);
// Original string :Javascript is the best
// Transformed string :javascriptisthebest
// Transformed by: oneWord

const high5 = function () {
  console.log('🖐');
};

// high5 is the callback function or evend handler or event listener.
document.body.addEventListener('click', high5);
// 🖐
['Jonas', 'martha', 'adam'].forEach[high5];

// Callback functions allows for abstraction. It means that we hide the detail of some code implementation. Our main transformer is only concerned with the transformation but does not care how it happens as the lower level functions handle this.

const myName = 'Ervis';

const transformer2 = function (name, fn) {
  console.log(fn(name));
};

const repeateStr = function (str) {
  return str.repeat(4);
};

const firstLetter = str => str[0];

transformer2(myName, repeateStr);
// ErvisErvisErvisErvis

transformer2(myName, firstLetter);
// E

// ====================================================================
console.log('132 - FUNCTIONS RETURNING FUNCTIONS');
// ====================================================================
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// rewriting the above in arrow functions. THIS IS MADNESS
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('hey'); // will return a function
greeterHey('Jonas');
// hey Jonas

greeterHey('Ervis');
// hey Ervis

// this works because of closures (will see later)

// you can also combine the above in one single line
greet('Hello')('Jonas');
// Hello Jonas

// ====================================================================
console.log('133 - THE CALL AND APPLY METHODS');
// ====================================================================
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // enhanced syntax (no need to use classic function declaration)
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(234, 'Ervis');
// Ervis booked a seat on Lufthansa flight LH234
lufthansa.book(334, 'John Smith');
// John Smith booked a seat on Lufthansa flight LH334

console.log(lufthansa);
//bookings array within the object
// {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
// : Array(2)
// 0: {flight: 'LH234', name: 'Ervis'}
// 1: {flight: 'LH334', name: 'John Smith'}

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'LH',
  bookings: [],
};

// storing the function within the a variable from the object
const book = lufthansa.book;

// book(23, 'Sarah Williams'); // this does not work
//Uncaught ReferenceError: Cannot access 'book' before initialization. The this keywooard is not pointing anymore to the ob=ject where it is saved. This is a normal function, not a method. How do ew tell js that we need to create a booking in the new Eurowings? We need to do that explicitely with call apply and bind.

// call(): first argument is where we want this to point to________
book.call(eurowings, 23, 'Sarah Williams'); // obviously pointint to eurowings
// Sarah Williams booked a seat on Eurowings flight LH23
book.call(lufthansa, 239, 'Sjojdfa Williams');
// Sjojdfa Williams booked a seat on Lufthansa flight LH239
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss air line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 22223, 'TOPODIGIO');
console.log(swiss);
// {airline: 'Swiss air line', iataCode: 'LX', bookings: Array(1)}

// apply method - not used anymore.
// same thing with only one difference, it takes an array of arguments
const flightData = [4535, 'Goergoe cooper'];
book.apply(swiss, flightData);

// you can use call() and spread operator: this is more common
book.call(swiss, ...flightData);

// explicitely point the this keyword within functions

// ====================================================================
console.log('134 - THE BIND METHOD');
// ====================================================================
// Allows to manually set the this keyword. It does not immediately call the function, instead it returns a new function where the this keyword is bound.

const bookEW = book.bind(eurowings); // returns a function where this points always to eurowings
bookEW(23, 'Steven Seagal');
// Steven Seagal booked a seat on Eurowings flight LH23
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// We can also define some bound arguments, then you call the function with only the remaining needed argument
const bookEWflight23 = book.bind(eurowings, 23); // name is not bound [Partial Application process]
bookEWflight23('Erviiiiis'); // opnly the namme
bookEWflight23('Gigio'); // opnly the namme
console.log(eurowings.bookings);

// {flight: 'LH23', name: 'Sarah Williams'}
// {flight: 'LH23', name: 'Steven Seagal'}
// {flight: 'LH23', name: 'Erviiiiis'}
// {flight: 'LH23', name: 'Gigio'}

// With Event Listener >> YOU HAVE TO USE BIND --------------
// add a new attribute to the object
lufthansa.planes = 300;
// add a new method to the object
lufthansa.buyPlane = function () {
  console.log(this); // when called in an event handler, will print the object (it's the object calling the function)
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we cant use call() here because we do not need to call the function (the event will do), that's why bind is used here
// NAN because this keyword here points to the button. In this key the event handler function is attached to the button where the event is triggered

// PARTIAL APPLICATION ---------------------
// We can preset some parameteres
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 20));
// 22

// Set preset rate to 23%, the first value in bind() is the this keyword, in this case null.
// We create a more specific function from a more generic one.
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value *0.23
console.log(addVAT(100));
// 123

// Using functional approach for the problem above
const addTaxRate = function (value) {
  return function (rate = 0.23) {
    console.log(value + value * rate);
  };
};

const addVat2 = addTaxRate(200);
addVat2();
// 246
addVat2(0.1);
// 220

// ====================================================================
console.log('135 - CODING CHALLENGE 1');
// ====================================================================
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = this.prompter();

    while (answer > 3 || answer < 0 || Number.isNaN(Number(answer))) {
      answer = this.prompter();
    }
    this.answers[answer]++;

    this.displayResults(this.answers);
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(type);
    } else if (type === 'string') {
      // to create an strin from arrays you need to join it!
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },

  prompter() {
    return Number(prompt(`${this.question}\n${this.options.join('\n')[0]}`));
  },
};

const button = document.querySelector('.poll');
button.addEventListener('click', poll.registerNewAnswer.bind(poll));

//2
// manually set the keyword to a new property and we are forcing the only parameter to string
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// Poll results are 5, 2, 3 - this happens because the argument is set to string
poll.displayResults.call({ answers: [5, 2, 3] });
// array

// and this is how you do it with bind: tyou need to call the function!
poll.displayResults.bind({ answers: [5, 2, 3] }, 'string')();

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
