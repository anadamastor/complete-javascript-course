'use strict';
// // variables hoisting
console.log(me);
console.log(job); // temporary dead zone for this
console.log(year);

var me = 'Ervis'; // > undefined
let job = 'Software Engineer'; // > cannot access before initializazio.
const year = 1992;

// FUNCTIONS hoisting
console.log(addDecl(2, 3)); // > is hoisted
console.log(addExpr(2, 3)); // > is hoisted
console.log(addArrow(2, 3)); // > is NOThoisted. CANNOT GET ACCESSED BEFORE INITIALIZASED

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; // IT IS A CONST VARIABLE (NOW IN A TEMP DEAD ZONE)

// vars are hoisted with undefined

/// example
if (!numProducts) deleteShoppingCart();
// at this point of the code numProducts is not yet declared 10, but hoisted with undefined (false) hence the deletion of the shopping cart.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
// ---------------------
var x = 1; // creates property on the global window object in the dom
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
