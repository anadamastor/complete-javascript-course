'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2037-03-04T23:36:17.929Z',
    '2037-03-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
//format currencies
const formatCurr = function (value, locale, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const formatDate = (date, locale) => {
  const calcDaysPast = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPast(new Date(), date);
  console.log('DAYYYYYSPOASSED', dayPassed);
  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = `${date.getFullYear()}`.padStart(2, 0);
  // const hour = `${date.getHours()}`.padStart(2, 0);
  // const min = `${date.getMinutes()}`.padStart(2, 0);
  // return `${day}/${month}/${year}, ${hour}:${min}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const formattedMovement = formatCurr(mov, acc.locale, acc.currency);

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // looping in another array using the index of the first loop
    const displayDate = new Date(acc.movementsDates[i]);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="date">${formatDate(displayDate, acc.locale)}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// fake login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const nowApp = new Date().toISOString();
console.log(nowApp);

// labelDate.textContent = formatDate(nowApp);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //start timer to logout
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // ADD TRANSFER DATE
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      // ADD TRANSFER DATE
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  if (timer) clearInterval(timer);
  // timer = startLogOutTimer();
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    console.log(min, sec);

    // in each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 stop timer and log out user}, 1000);
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;

      labelWelcome.textContent = `Log in to get started`;
    }
    time--;
  };

  // decrease 1s

  // set time to five minutes
  let time = 10;
  // call timer very second
  tick();
  const timer = setInterval(tick, 1000);
  return timer; // this returns an id to be used then in the global scope
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ====================================================================
console.log('170. Converting and Checking Numbers');
// ====================================================================
// All numebrs aer represented as floating points number
console.log(23 === 23.0);
// true

console.log(0.1 + 0.2);
//0.30000000000000004

// numbers are only stored in binary form - it is very hard to represent some fractions in base 10
// binary base 10 - 0 to 9 - 1/10 = 0.1 EASY - 10/3 = 3.33333

console.log(0.1 + 0.2 === 0.3);
// false

// + will do type coercion and convert to number
// Instead of converting to number with =:
console.log(Number('23'));
console.log(+23);

// Parsing a number from string - it will automatically identify the numbers inside it
// The second argument is the numberic base - better to specify every time
console.log(Number.parseInt('2322px', 10));
// 2322

// if you have fractions is better to use parseFLoat
console.log(Number.parseFloat('2.5rem', 10));
// 2.5

// check if any value is a number

console.log(Number.isNaN(20));
// false
console.log(Number.isNaN('20'));
// false - this is a regular value (string in this case)

console.log(+'20x');
// Nan

console.log(Number.isNaN(+'20x'));
// true - this is a NaN

console.log(Number.isNaN(23 / 0));
// true - infinite is Nan

// USE THIS TO CHECK IF THIS IS A NUMBER OR inInteger
console.log(Number.isFinite(20));
// true
console.log(Number.isFinite('20'));
// false

console.log(Number.isInteger(20));
// true
console.log(Number.isInteger(20.0));
// true
console.log(Number.isInteger(20 / 0));
// false

// ====================================================================
console.log('171. Math and Rounding');
// ====================================================================

console.log(Math.sqrt(25));
// 5
console.log(25 ** (1 / 2));
// 3
console.log(8 ** (1 / 3));
//2

console.log(Math.min(2, 3, 5, 5));
console.log(Math.max(2, 3, 5, 5));

console.log(Math.PI * Number.parseFloat('109px') ** 2);
// 37325.26231730033;

console.log(Math.trunc(Math.random() * 6));

// random number between min and max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.6));
// 23 > removed the decimal part

console.log(Math.round(23.6));
// 24

console.log(Math.ceil(23.3));
// 24 // rounds up
console.log(Math.floor(23.3));
// 23 // rounds down

// Negative numbers
console.log(Math.trunc(-23.6));
//-23
console.log(Math.floor(-23.3));
// -24

// Decimals
console.log((2.7).toFixed());
//3 always return a string and not a number

// this is a primitive - no methods. Behind the scene js does boxing
// which transform it to a number object which has methods and then converted back to a primitive.

// addinfg an argiuments, includes the number of decimeals
console.log(+(2.7).toFixed(2));
// 2.70 // the = converts it to a number

// ====================================================================
console.log('172. The Remainder Operator');
// ====================================================================
console.log(5 % 2);
// 1 remainder

// check if even or not
const checkEven = number => {
  number % 2 == 0 ? console.log('even') : console.log('odd');
};
checkEven(2);
//even

checkEven(1);
//odd

labelBalance.addEventListener('click', () => {
  // Selecting all the rows of the movements and deconsutring to nodelist into an array so I can use foreach()
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// ====================================================================
console.log('173. Numeric Separators');
// ====================================================================
const diameter = 28_560_000_000; // too many zeros. Need a thousands separator.

// Numeric separator can be placed anywhere.Math

console.log(diameter);
// 28560000000

const priceCents = 345_99;
console.log(priceCents);
// 34599

const transferFee = 15_00;

const PI = 3.1415; // NOT ALLOWED at the beginning of number and end.
console.log(PI);

console.log(Number('23_0000')); // not working with not num,ber
// NaN
// ====================================================================
console.log('174. Working with BigInt');
// ====================================================================
// SPecial type of int, primite variable introdced in js2020
console.log(2 ** 53 - 1);
// 9007199254740991 biggest js can represent

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991;

// Bigger numbers lose precision
console.log(31231231231231231231423423n); // converts it to bigInt
console.log(BigInt(31231231231231231231423423));

const huge = 23123131231231312312n;
const num23 = 23;
// console.log(huge * num23); // cannot multiplay bigint witn int - need to convert it
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(23)); // cannot multiplay bigint witn int - need to

// ====================================================================
console.log('175. Creating Dates');
// ====================================================================
// 4 ways of creating dates
const now = new Date();
console.log(now);
// Tue Dec 20 2022 15:43:16 GMT+0000 (Greenwich Mean Time)

// You can define the date you want. JS will parse the string and write it properly but do not do it - is unreliable.

console.log(new Date('December 23, 2015'));
// 00Wed Dec 23 2015 00:00:00 GMT+0000 (Greenwich Mean Time)

// These dates are created by js it is safe to use it
console.log(new Date(account1.movementsDates[0]));

// month is 0 based
console.log(new Date(2345, 10, 19, 23, 23, 4));
// Mon Nov 19 2345 23:23:04 GMT+0000 (Greenwich Mean Time)

// It will autocorrent if the days is not correct.

console.log(new Date(0)); // unix time
// Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

// days to ms
console.log(new Date(3 * 24 * 60 * 60 * 1000));
//Sun Jan 04 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

//Dates are objects which have their own methods.

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
// 2037

console.log(future.getMonth());
// 10 (remove 1)
console.log(future.getDay());
console.log(future.getDate());
console.log(future.getSeconds());
// 0
console.log(future.toISOString()); // national standars
// 2037-11-19T15:23:00.000Z

//timestamp= milliseconds passed since the january first 1970
console.log(future.getTime());
// 2142256980000
console.log(new Date(2142256980000));
// Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)

// get timestamp for now
console.log(Date.now());

future.setFullYear(2040); // you can set month and other stuff
console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0000 (Greenwich Mean Time)

// ====================================================================
console.log('176. Adding Dates to "Bankist" App');
// ====================================================================
// see above in the app
// ====================================================================
console.log('177. Operations With Dates');
// ====================================================================
// calculation with dates to count days difference.
// result is timestamps in milliseconds

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(Number(future2));
// 2142256980000
console.log(+future2);
// 2142256980000

const calcDaysPast = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);
// 864000000 in ms and 10 days with division from ms to days

// ====================================================================
console.log('178. Internationalizing Dates (Intl)');
// ====================================================================
// experimentd API
const now2 = new Date();
console.log('NOW2', now2);

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
};
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now2); // local formatter for local country.
// As of 25 de dezembro às 13:47

// getting it for user
const locale = navigator.language;
console.log(locale);
// en-GB

// ====================================================================
console.log('179. Internationalizing Numbers (Intl)');
// ====================================================================
// Styling for how number shows and other metrics.
const optionNums = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false, // ignore groupings of units
};
const num4 = 232334234.34;
console.log(new Intl.NumberFormat('en-US', optionNums).format(num4));
// 232, 334, 234.34;
// 232,334,234.34 mph

console.log(new Intl.NumberFormat('de-DE', optionNums).format(num4));
// 232.334.234,34
//232.334.234,34 mi/h

console.log(new Intl.NumberFormat('ar-SY', optionNums).format(num4));
// ٢٣٢٬٣٣٤٬٢٣٤٫٣٤
//٢٣٢٬٣٣٤٬٢٣٤٫٣٤ ميل/س

console.log(new Intl.NumberFormat(navigator.language).format(num4));
// 232, 334, 234.34;

// ====================================================================
console.log('180. Timers: setTimeout and setInterval');
// ====================================================================
// setTimeout to execute some code in the future at some point: only executed once.

// callbackfuntion will be called after 1 second.
const ingredients = ['olives', 'spimach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} ${ing2}`),
  1000,
  ...ingredients
);
// THIS TIMER WILL NOT FREEZE THE CODE EXECUTION: timer will keep running in the background while other lines are executed - async

// in case of arguments - they are all added after the delays in ms

// cancelling a timer
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval: exactly as above this time it will run every second.
setInterval(function () {
  const now = new Date();
  console.log(now.getSeconds());
}, 1000);
// ====================================================================
console.log('181. Implementing a Countdown Timer');
// ====================================================================
