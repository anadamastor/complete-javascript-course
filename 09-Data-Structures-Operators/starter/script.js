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
