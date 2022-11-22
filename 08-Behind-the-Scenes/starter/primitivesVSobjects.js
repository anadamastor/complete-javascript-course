'use strict';
console.log('PRIMITIVES VS OBJECTS');

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27; // this is changing the objecet referenced in memory

console.log('me', me);
console.log('Friend', friend);
