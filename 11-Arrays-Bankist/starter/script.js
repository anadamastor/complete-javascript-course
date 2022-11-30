'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ====================================================================
console.log('142. Simple array methods');
// ====================================================================
// Methods are methods we could call to objects: arrays have methods, hence they are objects.

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// similar to strings. Take slices of array without changing it.
console.log(arr.slice(2, 5)); // length of the output will be end -start
// (3) ['c', 'd', 'e']

console.log(arr.slice(-2));
// (2)[('d', 'e')];

// if used without argument it can create a shallow copy of an array., as per the spread operator
console.log(arr.slice());
console.log(...arr);

// SPLICE
// like slice but changes the original array
console.log(arr.splice(2, 2)); // first paramater is index, second is  HOW MANY ITEMS to delete.
// (2)[('c', 'd')];

// REVERSE
// Mutated original array
let arr2 = ['j', 'i', '2', 'g', 'h'];
console.log(arr2.reverse());
// (5) ['h', 'g', '2', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//(8) ['a', 'b', 'e', 'h', 'g', '2', 'i', 'j']
// same as
console.log([...arr, ...arr2]);
// (8)[('a', 'b', 'e', 'h', 'g', '2', 'i', 'j')];

// JOIN
console.log(letters.join('-'));
// a - b - e - h - g - 2 - i - j;

// ====================================================================
console.log('143. The new at Method2'.padEnd(10, '.'));
// ====================================================================
const arr3 = [11, 33, 44];
console.log(arr3[0]); // can do exactly the same thin with a method.
console.log(arr3.at(0));

// last element of array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
// muche easier with at method:
console.log(arr3.at(-1));

// It also works on strings
console.log('ervis'.at(-1));
// s

// ====================================================================
console.log('144. Looping Arrays: forEach');
// ====================================================================
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// loop to print stuff
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// ====================================================================
console.log('145. forEach With Maps and Sets');
// ====================================================================

// ====================================================================
console.log('146. PROJECT: "Bankist" App');
// ====================================================================

// ====================================================================
console.log('147. Creating DOM Elements');
// ====================================================================

// ====================================================================
console.log('148. Coding Challenge #1');
// ====================================================================

// ====================================================================
console.log('149. Data Transformations: map, filter, reduce');
// ====================================================================

// ====================================================================
console.log('149. Data Transformations: map, filter, reduce');
// ====================================================================

// ====================================================================
console.log('150. The map Method');
// ====================================================================

// ====================================================================
console.log('151. Computing Usernames');
// ====================================================================

// ====================================================================
console.log('152. The filter Method');
// ====================================================================

// ====================================================================
console.log('153. The reduce Method');
// ====================================================================
// ====================================================================
console.log('153. The reduce Method');
// ====================================================================
// ====================================================================
console.log('154. Coding Challenge #2');
// ====================================================================
// ====================================================================
console.log('156. Coding Challenge #3');
// ====================================================================
// ====================================================================
console.log('157. The find Method');
// ====================================================================
// ====================================================================
console.log('159. Implementing Transfers');
// ====================================================================
// ====================================================================
console.log('160. The findIndex Method');
// ====================================================================
// ====================================================================
console.log('161. some and every');
// ====================================================================
// ====================================================================
console.log('164. More Ways of Creating and Filling Arrays');
// ====================================================================
// ====================================================================
console.log('165. Summary: Which Array Method to Use?');
// ====================================================================
// ====================================================================
console.log('166. Array Methods Practice');
// ====================================================================
// ====================================================================
console.log('167. Coding Challenge #4');
// ====================================================================
