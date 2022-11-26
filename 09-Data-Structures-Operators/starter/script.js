'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameRes: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    // you can do destructuring also when writing parameters
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// order pizza: because of the rest argument the ones after the first one will be packed in an array
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// one object passed as an argument to do then destructuring when wiriting the
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sol',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sol',
  starterIndex: 2,
});

// object destructuring required exact names of the keys

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// to change name of the keys:

const {
  nameRes: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log('this is renamed', restaurantName, hours, tags);

//DEFAULT VALUES WHILE DESTRUCTURING
const { menu = [], starterMenu: starterMenu = [] } = restaurant; // default value is empty array
console.log(menu, starterMenu);

// MUTATING VARIABLES
let a = 111;
let b = 999;
let c = 2;
const obj = { a: 23, b: 7, c: 14 };

// object destructuring assignement - you wrap within ()
({ a, b, c } = obj);
console.log('obj destr', a, b, c);

// NESTED OBJECTS
const {
  fri: { open: o, close: cl },
} = hours;
console.log(o, cl);

// ARRAY DESTRUCTURING
const arr = [2, 3, 4];
const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories; // you can skip the second menu with the sapce
console.log(main, secondary);

// using destructuring to switch values
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log('SWITCHED', main, secondary);

console.log(restaurant.order(2, 0));

//receive 2 return values from a function!!!
const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

// NESTED ARRAYS
const nested = [2, 3, [6, 7]];

// const [i, , j] = nested;
// console.log(i, j);

// just do a nested nesting
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p, q, r = 1] = [8, 9]; // this would return undefined without the default
console.log(p, q, r);

// SPREAD OPERATOR ==========================================
console.log(restaurant);

const arrSpread = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // this is no good
console.log(badNewArr);

const newArr = [1, 2, ...arrSpread];
console.log(newArr); //> [ 1, 2, 7, 8, 9 ] unwraps the array

console.log(...newArr); // this will pring everyhing number by number

// building a new array from scratch basically.
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array - it is used to make shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// join two arrays
const joinedArray = [...restaurant.mainMenu, ...restaurant.mainMenu];
console.log(joinedArray);

// spread on strings
const str = 'jonas';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str); // you are expanding the string to single letters.
// it wouldnt work in a template litteral which does not expect values separated by comas

// const ingredients = [
//   prompt("let's make pasta! Ingredint 1?"),
//   prompt('nigredint 2?'),
//   prompt('Ingredint 3?'),
// ];

// // console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Since 2018 the spread operator also work on objects even if they are not iterables.

// objects shallow copy + adition of a new key value pair.
const newRestaurant = { ...restaurant, founder: 'Ervis' };
console.table(newRestaurant);
newRestaurant.nameRes = 'Ristorante roma';
console.log(restaurant.nameRes);
console.log(newRestaurant.nameRes);

// REST OPERATOR =====================
// SPREAD IS USED ON THE RIGHT SIGHT OF THE +
const arr3 = [1, 2, ...[3, 4]];

// REST BECAUSE ON THE LEFT SIDE OF =
const [f, g, ...others] = [1, 2, 3, 4, 5]; // it will take the rest part of the array and construct an array.
console.log(a, b, others);
// > 23 7 [ 3, 4, 5 ]

// REST and SPREAD operator together
// rest element must the last element in the list of variables to the left.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// REST WITH OBJECT
const { sat, ...weeKDays } = restaurant.openingHours; // ths will take away saturday and keep only the remainig parts.
console.log(weeKDays);
// > { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// functions: how to make the argument
const add = function (...numbers) {
  // we know that this is an array because of the REST is to the left compared to the arguments when callling
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(3, 4, 5);
add(3, 4, 5, 33, 5, 2);

const xx = [23, 5, 7];
add(...xx); //SBAM = THESE WILL BE UNPACKED AND PACKED THEN ABOVE

// SHORT CIRCUITING
console.log(3 || 'carl'); // > 3
console.log('' || 'carl'); // > Carl, ""
console.log(true || 0); // > true
console.log(undefined || null); // > undefined is falsy

console.log(undefined || 0 || '' || 'hello' || 23 || null);
// > hello is truthy and will short circuit the whole expression. No need to look for other values.

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// setting default values
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// || or operator will return the first truthy values of all operands or simply the last value if all of them are falsy

// && SHORT CIRCUITING
console.log('----AAAAAND----');
console.log(0 && 'Jonas'); // > 0 returns the first falsy value without even considering the second one
console.log(7 && 'Jonas'); // when it is truthy it will continue and return the last value.

console.log('Hello' && 23 && null && 'jonas'); // > null

// instead of creating an if condition to check if a property exists.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// you can short-circuit it:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// && will return the first falsy value or the last one if all of them are truthy

// && nullish coalescing CIRCUITING
console.log('----nullish coalleshing----');
const guestCorrect = restaurant.numGuests ?? 10;
// works with the idea of nullish values (only null and undefined. Does not include 0 or empty string)

// Logical Assignment Operators
const rest1 = { name: 'Capri', numGuests: 20 };
const rest2 = { name: 'La Piazza', owner: 'Giovanni Rossi' };

rest1.numberGuests = rest1.numGuests || 10; // the first one will be returned if truthy, otherwise 10
rest2.numberGuests = rest2.numGuests || 10;
console.log(rest1, rest2);

//CAN BE DNE AS BELOW:

// OR ASSIGNEMENT OEPRATOR (||=)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1, rest2);
// HOWEVWE IF IT IS = 0 IT WILL OVERWRITE IT

// NULLISH ASSIGNEMENT OEPRATOR (??=) - NULL OR UNDEFINED
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND ASSIGNEMENT OEPRATOR (&&=) - NULL OR UNDEFINED

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
// assign a variable if currently truthy.

console.log(rest1, rest2);

// 111- FOR-OF LOOP
console.log('FOR OR LOOP -----------------');
const menuForLoop = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuForLoop);

// MICIDIALE - loop for arrays
// for (const item of menuForLoop) console.log(item);

// difficult to find the index of the element.(destructuring the array)
for (const [i, el] of menuForLoop.entries()) {
  console.log(`${i + 1}: ${el}`); // prints each time an array with index and value
}

// 112- ENHANCED OBJECT LITERALS
console.log('ENHANCED OBJECT LITERALS -----------------');
// OBJECT LITERAL: you write an object literal syntax. There are three ways to do so.

const hoursLiteral = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// 1 - and now to add it to an existing object you do not need to create a new key value
const restaurantObjectLiteral = {
  name: 'gigi',
  hoursLiteral, // just adding it directly here
};

console.table(restaurantObjectLiteral);

// 2 methods without specyfing the function keywords

const restaurantObjectLiteral2 = {
  name: 'gigi',
  hoursLiteral, // just adding it directly here,
  order(starterIndex, mainIndex) {
    return 'CIAO';
  },
};

console.log(restaurantObjectLiteral2.order());

// 3 dynamic key naming: wrap it with []
const weeKDays2 = ['mon', 'tue', 'wed', 'thu'];
const hoursLiteral2 = {
  name: 'gigi',
  [weeKDays2[1]]: {
    open: 12,
    close: 22,
  },
  [weeKDays2[2]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    // you can also interpolate stuff
    open: 0,
    close: 24,
  },
};
console.table(hoursLiteral2);

// ----------------------------------
// 113 - OPTIONAL CHAINING
// ----------------------------------

console.log('OPTIONAL CHAINING -----------------');

// console.log(restaurant.openingHours.mon.open);
// the above will crash script.js:374 Uncaught TypeError: Cannot read properties of undefined (reading 'open')

// .mon does not exist - hence we need this to check if the property exist.
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon);

// with optional chaining if a proeprty does not exist it will return underfined.
// console.log(restaurant.openingHours.mon?.open); // only if .mon property exists then return open.
// > undefined
// you can create multiple chaining as well.
// console.log(restaurant.openingHours?.mon?.open);

// const daysss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of daysss) {
//   console.log(day);
//   console.log(restaurant.openingHours[day]?.open);
//   // brackets to read that property
// }

const daysss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of daysss) {
  open = restaurant.openingHours[day]?.open ?? 'closed';
  // ?? nullish coalescient operator takes into account the 0 so it returns it intead of having closed on saturday
  console.log(`On ${day}, we open at ${open}`);
  // brackets to read that property
}

// Optional jaining on methods

console.log('OPTIONAL CHAINING on methods -----------------');
console.log(restaurant.order?.(0, 1) ?? ' Method does not exist');
// >> (2) ['Focaccia', 'Pasta']

console.log(restaurant.orderRisotto?.(0, 1) ?? ' Method does not exist');
// >>  Method does not exist

// Optional chaining on arrays
const users = [{ name: 'jonas', email: 'hello@jonas.op' }];
console.log(users[0]?.name ?? 'user array empty');
// >> jonas
console.log(users[2]?.name ?? 'user array empty');
// >> user array empty

// ----------------------------------
// 114 - LOOPING OVER OBJECTS (NOT ITERABLES)
// ----------------------------------
console.log('114 - LOOPING OVER OBJECTS (NOT ITERABLES-----------------');
const openingHours = {
  [daysss[1]]: {
    open: 12,
    close: 22,
  },
  [daysss[4]]: {
    open: 11,
    close: 23,
  },
  [daysss[5]]: {
    // you can also interpolate stuff
    open: 0,
    close: 24,
  },
};

// property Names (keys)
const properties = Object.keys(openingHours);
console.log(properties);
// >> (3) ['tue', 'fri', 'sat']

let openStr = `We are open on days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);
// >> We are open on days: tue, fri, sat,

// Property values
const values = Object.values(openingHours);
console.log(values);
// >> (3) [{…}, {…}, {…}]

// Entire object loop
const entries = Object.entries(openingHours);
console.log(entries); // transform object in

// looping while destructuring
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// ------------------
console.log('116 - SETS -----------------');
// COLLECTION OF UNIQIE VALUES - NO DUPLICATES!

const ordersSet = new Set(['paste', 'pizza', 'pizza', 'pizza', 'risotto']);
console.log(ordersSet);
// >> Set(3) {'paste', 'pizza', 'risotto'}

// Remember: strings are iterables!
console.log(new Set('ervis'));
// Set(5) {'e', 'r', 'v', 'i', 's'}

console.log(ordersSet.size);
// > unique elements

// check if eleement is present in a set
console.log(ordersSet.has('pizza'));
// > true

// add element
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// Set(4) {'paste', 'pizza', 'risotto', 'Garlic Bread'}

//delete element
ordersSet.delete('risotto');
console.log(ordersSet);
// Set(3) {'paste', 'pizza', 'Garlic Bread'}

//Retrieve values in a set: you cannot get sets out of a set, you do not need it actually. THey're not ordered values and unique

// ordersSet.clear();
// console.log(ordersSet);
// Set(0) {size: 0}

// Since they are iterables,you can loop in a set.
for (const order of ordersSet) {
  console.log(order);
}
// paste
// pizza
// Garlic Bread

// SETS are used to try unique values of arrays
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//Set(3) {'waiter', 'chef', 'manager'}
// (3)[('waiter', 'chef', 'manager')]; with the spread operator
// now I want to convert it in array. Spread operator works on all iterables

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
// 3

console.log(new Set('asdfjklsdfjkasfiuy').size);
// 10

// ----------------------------------
// 117 - MAPS FUNDAMENTALS
// ----------------------------------

console.log('117 - MAPS FUNDAMENTALS-----------------');

const rest = new Map();

// to populate the map:
rest.set('name', 'Cassico Italiano');
rest.set(1, 'Firenze');
console.log(rest.set(2, 'Firenze')); // this will update the map but also returns it so you can use console log directly
// Map(3) {'name' => 'Cassico Italiano', 1 => 'Firenze', 2 => 'Firenze'}

// You can chain sets to add more sets since it calls the updated map.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest);
//Map(6) {'name' => 'Cassico Italiano', 1 => 'Firenze', 2 => 'Firenze', 'categories' => Array(4), 'open' => 11,'close' => 23}

// get items from map
console.log(rest.get('name'));
// Cassico Italiano
console.log(rest.get(true));
// we are open

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get(close)));
// we are open

console.log(rest.has('categories'));
// true

// deleting key named 2
rest.delete(2);
console.log(rest);
//Map(7) {'name' => 'Cassico Italiano', 1 => 'Firenze', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}

console.log(rest.size);
// 7
console.log(rest.clear());
// undefined

// array as key within a map
rest.set([1, 2], 'test');
console.log(rest);
// Map(1) {Array(2) [1, 2] => 'test'}
console.log(rest.get([1, 2])); // this does not retrieve test, it returns undefined.
//  These two arrays (the ones used to set() and the other one to get())are not the same object in memory. You need to use a variable with the same array to call stuff within a map.
const arraa = [1, 2];
rest.set(arraa, 'test');
console.log(rest.get(arraa));
// test

// we can select elements from the dom and then save tem as keys in the map.
rest.set(document.querySelector('h1'), 'Heading');
console.log(document.querySelector('h1'));

console.log(rest);
// h1 => 'Heading'

// --------------------------------------------------------------------
// --------------------------------------------------------------------
console.log('118 - MAPS ITERATION');
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// OTHER way to populate maps instead of using set()

const question = new Map([
  ['question', 'What is the best programming langiage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.table(question);
// 0: {"question" => "what is the best programming langiage in the world?"}
// 1: {1 => "C"}
// 2: {2 => "Java"}
// 3: {3 => "Javascript"}
// 4: {"correct" => 3}
// 5: {true => "correct"}
// 6: {false => "try again"}

//convert object to map, they have the same structure
console.log(Object.entries(openingHours));
// (3) [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Map(3) {'tue' => {…}, 'fri' => {…}, 'sat' => {…}}

// QUIZ GAME!!!!!!!!!!!
//iteration: possible on maps as they are iterables.
console.log(question.get('question'));

for (const [key, value] of question) {
  // logging only keys that are numbers
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// Answer 1: C
// Answer 2: Java
// Answer 3: Javascript

// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log(answer);

//check if answer is Correct
answer === question.get('correct')
  ? console.log('CORRECT!')
  : console.log('Wrong!!!');

// a better way to do it is using the boolean keys within the map?
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
// you have an array of arrays of key,value pair

console.log(question.entries());
console.log(question.values());
console.log(question.keys());
// all of these return iterators, you have to spread them in order to have arrays

// --------------------------------------------------------------------
// --------------------------------------------------------------------
console.log('121 - WORKING WITH STRINGS');
// --------------------------------------------------------------------
// --------------------------------------------------------------------
const airline = 'TAP Air Portugal';
const plane = 'A320';

// SIMILARLy to array can get letters with indexes
console.log(plane[0]);
// >> A

console.log('directly from string'[1]);
// i



// METHODS for strings
console.log(airline.indexOf('r'));
// 6
console.log(airline.lastIndexOf('r'));
// 10
console.log(airline.indexOf('Portugal'));
// 8

// SLICE method
console.log(airline.slice(4)); // 4 is the beginning where the extraction will start
// > Air Portugal - substring taking AIR
// string are primitive and immutable - this action is not changing instanceof. Slice() always return a new string

console.log(airline.slice(4, 7)); // end value (7) is not included in the string
// > Air

console.log(airline.slice(0, airline.indexOf(' ')));
// > TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// > Portugal

console.log(airline.slice(-2)); // use negative to start from the end
// > al

console.log(airline.slice(1, -1));
// > AP Air Portuga

// EXERCISE
const checkMiddleSeat = function (seat) {
  // B and E ar middle seats
  const seatLetter = seat.slice(-1);
  return seatLetter === 'B' || seatLetter === 'E'
    ? 'IT IS A MIDDLE SEAT'
    : 'NOT A MIDDLE SEAT';
};

console.log(checkMiddleSeat('11B'));
// > IT IS A MIDDLE SEAT

console.log(checkMiddleSeat('11A'));
// > NOT A MIDDLE SEAT

// Strings are primitives that have methods. WHen we call a method on a String, that will be converted to a string object with the same object. THis process is called boxing
// this is what happens when we call a method on a string:
console.log(new String('jonas')); // js transforms the string into objexts, alters it and then converts it back to string.

// --------------------------------------------------------------------
// --------------------------------------------------------------------
console.log('122 - WORKING WITH STRINGS - 2');
// --------------------------------------------------------------------
// --------------------------------------------------------------------
