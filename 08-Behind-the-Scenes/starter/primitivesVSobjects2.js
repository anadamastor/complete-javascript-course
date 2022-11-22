'use strict';
console.log('PRIMITIVES VS OBJECTS 2');

let lastName = 'William';
let oldLastname = lastName;
lastName = 'Davis';
console.log(lastName, oldLastname);
// the above is linear because each primitive value will be saved into its piece of memory within the stack,

const jessica = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: '27',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; // jessica gets married and changes name/ It is just another object in the stack which hold the same reference to the object save within the heap.
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica); // both names will be the same, as expected.

// COPYING OBJECTS
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: '27',
  family: ['alice, bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // this is a shallow copy not a deep one.
jessica2.lastName = 'derekl';

// shallow copy explanation
jessicaCopy.family.push('mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy); // this is a copy of the object, a new object within the heap
// being a shallow copy, manipulationg the object within the copy will targeet and change also the values for the original one.
