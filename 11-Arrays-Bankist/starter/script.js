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
const displayMovements = function (movements) {
  // empty content of the movements
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
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
displayMovements(account1.movements);
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

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(movements);
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

const calcDisplaySummary = movements => {
  // let sumIn = 0;
  // let sumOut = 0;

  const incomes = movements
    .filter(x => x > 0)
    .reduce((acc, curr) => acc + curr);

  const expenses = movements
    .filter(x => x < 0)
    .reduce((acc, curr) => acc + curr);
  // movements.forEach(mov => {
  //   mov > 0 ? (sumIn += mov) : (sumOut += mov);
  // });

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  // calculating interest only on deposits
  const interest = movements
    .filter(x => x > 0)
    .map(deposit => deposit * 0.012)
    .filter(int => int >= 1) // interest calculated only if it greater than one eur
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.innerHTML = `${interest}€`;
};
calcDisplaySummary(movements);

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
