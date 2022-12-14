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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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
// for (const movement of movements) {
// using entries() on the array we can get the index.
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// FOREACH
// needs a callback function in order to tell it what to do. forEach will call it at every loop of the array. At every iteration the callback function will receive the item as it's current argument

movements.forEach(function (movement) {
  // in this case movement will be equal to the item of that iteration.
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// ACCESS INDEX AND ARRAY and INDEX
// for each pass the foreach passes the whole array and the index. Order of the arguments is important.
// first argument is always the current element of that iteration
// second one is always the index, and third one is the whole array.
movements.forEach(function (movement, index, array) {
  // in this case movement will be equal to the item of that iteration.
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// Movement 1: You deposited 200
// Movement 2: You deposited 450

// YOU CANNOT BREAK A FOREACH LOOP - IF YOU NEED TO DO THAT USE A FOR LOOP

// ====================================================================
console.log('145. forEach With Maps and Sets');
// ====================================================================

// forEach() with a Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// similarly to the array for each, the callback functions calls value, key and the whole map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// forEach() with a Set
const currenciesUnique = new Set([
  'USD',
  'GBP',
  'USD',
  'EUR',
  'USD',
  'GBP',
  'USD',
  'EUR',
]);
console.log(currenciesUnique);
// Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, __, set) {
  console.log(` ${value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR

// Key and values are the same for a set.
// __ means trowaway variable (not needed)
// ====================================================================
console.log('146. PROJECT: "Bankist" App');
// ====================================================================
// just a look at the application to build

// ====================================================================
console.log('147. Creating DOM Elements');
// ====================================================================
// show array of results
const displayMovements = function (movements, sort = false) {
  // empty content of the movements
  containerMovements.innerHTML = '';

  // slice() used in the middle of the cain to create a copy
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    // template litteral
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>`;

    // add each of the movemnts to the container iin HTML
    // accepts position where to add html.
    // second element is the string we want to add.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
// ====================================================================
console.log('148. Coding Challenge #1');
// ====================================================================
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogsKate) => {
  // SHALLOW COPY OF AN ARRAY:
  // console.log(arr.slice());
  // console.log(...arr);
  const dogsJuliaShallow = [...dogsJulia].slice(1, -2);
  const dogsKateShallow = dogsKate.slice();
  const dogsAges = [...dogsJuliaShallow, ...dogsKateShallow];
  // array method to join two arrays
  // const dogsAges = dogsJuliaShallow.concat(dogsKateShallow);

  dogsAges.forEach((dogAge, index) => {
    console.log(
      `Dog number ${index + 1} is ${checkAdultOrPuppy(
        dogAge
      )}, and is ${dogAge} years old`
    );
  });
};

const checkAdultOrPuppy = dogAge =>
  dogAge >= 3 ? 'an adult' : 'still a puppy 🐶';

checkDogs(dogsJulia, dogsKate);

// ====================================================================
console.log('149. Data Transformations: map, filter, reduce');
// ====================================================================

// ====================================================================
console.log('150. The map Method');
// ====================================================================
// Returns a mapped array: you need to save it somewhere.
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// you need to save the returned array from map to a new var
const movmUSD = movements2.map(money => money * eurToUsd);

console.log(movmUSD);
//(8) [220.00000000000003, 495.00000000000006, -440.00000000000006,
// 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// you have access to index as well, like forEach()
const movDesciption = movements2.map((mov, i, arr) => {
  // template litteral
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movDesciption);
//(8) ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', '
// Movement 3: You withdrew 400', 'Movement 4: You deposited 3000',
// 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130',
// 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']

// ====================================================================
console.log('151. Computing Usernames');
// ====================================================================
// we need username with initial of users names.
const user = 'ervis lapi'; // I want to have el
const createUsernames = accs => {
  // side effect of foreach. We are not returning a new value, we are working on the accounts objects.
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);
// wlp

const updateUI = function (account) {
  // DISPLAY MOVEMENTS
  displayMovements(account.movements);

  // DISPLAY BALANCE
  calcDisplayBalance(account);

  // DISPLAY SUMMARY
  calcDisplaySummary(account);
};
// ====================================================================
console.log('152. The filter Method');
// ====================================================================
// filter values matching the criteria of the callback function
const deposits = movements2.filter(function (mov) {
  return mov > 0;
});
console.log(movements2);
// (8)[(200, 450, -400, 3000, -650, -130, 70, 1300)];
console.log(deposits);
// (5)[(200, 450, 3000, 70, 1300)];

const withdrawals = movements2.filter(move => move < 0);
console.log(withdrawals);
// (3) [-400, -650, -130]

// ====================================================================
console.log('153. The reduce Method');
// ====================================================================
// Essentially boils down all elemtns in array to a single value
console.log(movements2);
// first paramenter is always current, index, and arr
const balance = movements2.reduce(function (accumulator, current, index, arr) {
  // need to return the value so it will increment in the next value
  console.log(`Iteration number ${index}: acc ${accumulator}`);
  console.log(`Iteration number ${index}: curr ${current}`);

  return accumulator + current;
}, 0); // this is the initial value of the accumulator.
console.log(balance);

// Iteration number 0: acc 0 /// initial value
// Iteration number 0: curr 200
// Iteration number 1: acc 200 / after first iteration acc value
// Iteration number 1: curr 450
// Iteration number 2: acc 650

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};
// calcDisplayBalance(movements);
// 3840

// maximum value using reduce
const maxValue = movements2.reduce(function (acc, curr) {
  return curr > acc ? curr : acc;
}, movements[0]);
console.log(`your maximmun deposit is ${maxValue}`);
// your maximmun deposit is 3000

// ====================================================================
console.log('154. Coding Challenge #2');
// ====================================================================
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });

  const adultDogs = humanAges.filter(dogAgeHuman => {
    return dogAgeHuman > 18;
  });

  const avg = adultDogs.reduce((acc, curr, i, arr) => {
    return acc + curr / arr.length;
  }, 0);
  console.log(avg);
  // 220
  return avg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// 44

// ====================================================================
console.log('155. Chaining methods');
// ====================================================================
// as long as a method returns an array you can chain them. Reduce ends the cycle because it returns am array.

// Pipeline of methods
const totalDepositisUSd = movements
  .filter(move => move > 0)
  .map((move, i, arr) => {
    console.log(arr); // this is how you can have access to the current array.

    return move * eurToUsd;
  })
  // .map(move => move * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositisUSd);
//5522

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(x => x > 0)
    .reduce((acc, curr) => acc + curr);

  const expenses = account.movements
    .filter(x => x < 0)
    .reduce((acc, curr) => acc + curr);
  // movements.forEach(mov => {
  //   mov > 0 ? (sumIn += mov) : (sumOut += mov);
  // });

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  // calculating interest only on deposits
  const interest = account.movements
    .filter(x => x > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1) // interest calculated only if it greater than one eur
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.innerHTML = `${interest}€`;
};
// calcDisplaySummary(movements);

// ====================================================================
console.log('156. Coding Challenge #3');
// ====================================================================
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge2 = ages => {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(dogAgeHuman => dogAgeHuman > 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  return humanAges;
};

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
//44

// ====================================================================
console.log('157. The find Method');
// ====================================================================
// Loops over the array and retrieve an elemtn
// Needs a callback function that returns a boolean.
// Find will return the first true item.

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
// 400

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

// ====================================================================
console.log('159. Implementing Login');
// ====================================================================

let currentAccount;

// we need to prevent page reload. Hitting enter triggers a click event in the from.
btnLogin.addEventListener('click', function (e) {
  // Prevemnt form from submitting
  e.preventDefault();
  console.log('login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // {
  //   "owner": "Jonas Schmedtmann",
  //   "movements": [
  //       200,
  //       450,
  //       -400,
  //       3000,
  //       -650,
  //       -130,
  //       70,
  //       1300
  //   ],
  //   "interestRate": 1.2,
  //   "pin": 1111,
  //   "username": "js"
  // }

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI AND WELCOMA MESSAGE
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    // removes focus from the pin input
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

// ====================================================================
console.log('159. Implementing Transfers');
// ====================================================================

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amountSent = Number(inputTransferAmount.value);
  if (
    amountSent > 0 &&
    receiverAccount &&
    currentAccount.balance >= amountSent &&
    // optional chianing: this will become undefined if object does not exist
    receiverAccount?.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amountSent);
    currentAccount.movements.push(-amountSent);

    updateUI(currentAccount);
    console.log('transfer valid');
  } else {
    console.log('transfer INVALID');
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

// ====================================================================
console.log('160. The findIndex Method');
// ====================================================================
// returns index of the found element.
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value == currentAccount.username
  ) {
    // delete your accout if all matches
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // delete account
    console.log('account closed at index', index);
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log('account NOT VALID TO CLOSE');
  }
});

// ====================================================================
console.log('161. some and every');
// ====================================================================
console.log(movements);

// checks for equality
console.log(movements.includes(-139));

// check for a condition met
console.log(movements.some(move => move === -130));
//true

const anyDeposits = movements.some(move => move > 0);
console.log(anyDeposits);
// true

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // SOME
  // check if there is a single movement which is 10% of the loan requested
  if (
    amount > 0 &&
    currentAccount.movements.some(move => move >= amount / 10)
  ) {
    // ADD MOVEMENT
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//EVERY: if every method passes the test it returns true
console.log(movements.every(mov => mov > 0));
// false
console.log(account4.movements.every(mov => mov > 0));
// true: it actually has only deposits

// Separate callback: you can save a function in a different
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
// false
console.log(movements.some(deposit));
// true

// ====================================================================
console.log('162. flat and flatMap');
// ====================================================================
// flat only goes one level deep
const arrays = [[1], 2, 2, 4, [2, 3]];
console.log(arrays.flat());
//[1, 2, 2, 4, 2, 3]

const arrDeep = [[1], 2, 2, 4, [2, 3, [[1], 2, 2, 4, [2, 3]]]];
console.log(arrDeep.flat());
//[1, 2, 2, 4, 2, 3, Array(5)]
console.log(arrDeep.flat(2));
//[1, 2, 2, 4, 2, 3, Array(1), 2, 2, 4, Array(2)]

// Calculating all banks movements
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const sum = allMovements.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// 17840

//flatmap is a combination of map first and then flat
const accountMovements2 = accounts.flatMap(acc => acc.movements);
console.log(accountMovements2);

// ====================================================================
console.log('163. Sorting Array');
// ====================================================================
// Sorting is a destrucitng method basted on strings.

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
//  ['Adam', 'Jonas', 'Martha', 'Zach']

// numbers: sort converts them in strings and then sorts strings first "number"
console.log(movements);
//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log(movements.sort());
// [-130, -400, -650, 1300, 200, 3000, 450, 70]

// Ascending order
// LOOPS in the array until the order is perfectly switched
// return of code block < 0 -> a, b (keep order)
// return of code block > 0 -> b, a (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// (8)[(-650, -400, -130, 70, 200, 450, 1300, 3000)];

//the above can be simplified to the following. If a is greater than b it will return a positive and the position will not change
movements.sort((a, b) => a - b);
console.log(movements);
// 8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
// Descending sorting
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);
// [3000, 1300, 450, 200, 70, -130, -400, -650]

// Sorting functionality
let sorted = false; // monitoring state variable
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// ====================================================================
console.log('164. More Ways of Creating and Filling Arrays');
// ====================================================================
// We can generate arrays without defining them manually

// Using array constructor: build empy array of that length. But you cannot use methods on it a part from one fill().
const x = new Array(7);
console.log(x);
// [empty × 7]length: 7[[Prototype]]: Array(0)

// x.fill(3); // mutates the array
console.log(x);
// ) [3, 3, 3, 3, 3, 3, 3]

// argument to populate, and the beginning paramater (index 4) or ending
x.fill(1, 4, 5);
console.log(x);
// (7) [empty × 4, 1, empty × 2]

const arr4 = [1, 2, 3, 4, 5];
arr4.fill(23, 2, 6);
console.log(arr4);
// [1, 2, 23, 23, 23]

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// (7)[(1, 1, 1, 1, 1, 1, 1)];

const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ is a throwaway variable not needed/used
console.log(z);
//[1, 2, 3, 4, 5, 6, 7]

// array with random variables

const dice = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));
console.log(dice);
// [6, 26, 83, 45, 26, 5, 0, 79, 26, 5]

// queryselectorAll return a nodelist which is similar to array but not a real one ( you cannot use normal methods). Hence you create an array form that

// getting movements from UI

labelBalance.addEventListener('click', function () {
  // create an array from an arraylike structure (nodelist)
  const movementsUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUi);
  //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]

  // using spread operator > but then you need to map it to get the value.
  const movUi = [...document.querySelectorAll('.movements__value')];
  console.log(movUi);
});

// (8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]

// ====================================================================
console.log('165. Summary: Which Array Method to Use?');
// ====================================================================
// see screenshot in notes
// ====================================================================
console.log('166. Array Methods Practice');
// ====================================================================

// 1- check how much have been depositet in all accounts.
const bakDepositSum = accounts.flatMap(acc => acc.movements);
console.log(
  bakDepositSum.filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0)
);
// 25180

// 2 - how many deposits have been with at least 1k euro
// const number1kDeposits = bakDepositSum.filter(mov => mov >= 1000).length;
const number1kDeposits = accounts
  .flatMap(acc => acc.movements)
  // accumulator becomes a counter here BELLISSIMO!
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(number1kDeposits);
// 6 SONO UN DRAGO

let a = 10;
console.log(a++);
// 10 (a++ increments it but RETURNS THE OLD VALUE)

// 3 - Object to return an object.
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposits2 += curr) : (sums.withdrawals2 += curr);
      return sums;
    },

    // Initial value of accumulator sums is an object with 0 values.
    // We will increment it.
    { deposits2: 0, withdrawals2: 0 }
  );

console.log(deposits2, withdrawals2);
// {deposits: 25180, withdrawal: -7340}
// 25180 -7340

// 4
// convert text in title case
// this is a nice title -> This Is a Nice Title

const convertTitleCase = title => {
  const capitalise = word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };
  const exeptions = ['a', 'an', 'the', 'but', 'or', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exeptions.includes(word) ? word : capitalise(word)))
    .join(' ');

  return capitalise(titleCase);
};

console.log(convertTitleCase('Testo di prova a Caso CAVOLO the on Craft'));
// Testo Di Prova a Caso Cavolo the on Craft

// ====================================================================
console.log('167. Coding Challenge #4');
// ====================================================================

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2

const howMuchDogIsEating = (dogs, owner) => {
  const dogWithOwner = dogs.find(dog => dog.owners.includes(owner));
  console.log(dogWithOwner);
  if (dogWithOwner.curFood < dogWithOwner.recommendedFood * 0.9) {
    console.log(`${owner}'s dog eating too little`);
  } else if (dogWithOwner.curFood > dogWithOwner.recommendedFood * 1.1) {
    console.log(`${owner}'s dog eating too MUCH`);
  }
};

howMuchDogIsEating(dogs, 'Sarah');

// 3
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (res, currDog) => {
    if (currDog.curFood < currDog.recommendedFood * 0.9) {
      console.log(currDog, 'eating too little');

      res.ownersEatTooLittle.push(currDog.owners);
    } else if (currDog.curFood > currDog.recommendedFood * 1.1) {
      res.ownersEatTooMuch.push(currDog.owners);
    }
    console.log(currDog, 'eating too much');
    return res;
  },
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
  }
);

// 4
console.log(ownersEatTooMuch.flat().join(' and ') + "'s dogs eat too much!");
console.log(
  ownersEatTooLittle.flat().join(' and ') + "'s dogs eat too little!"
);

//
const checkDogEatsOk = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// 5
const perfectlyEatingDog = dogs.filter(dog => checkDogEatsOk(dog));
console.log(perfectlyEatingDog);

// 6
const anyOkEatingDog = dogs.some(dog => checkDogEatsOk(dog));
console.log(anyOkEatingDog);
// true

// 7
const dogsOk = [...perfectlyEatingDog];
console.log(dogsOk);

// 8
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
