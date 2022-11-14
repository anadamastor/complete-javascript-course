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
};

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
