'use strict';

function calcAge(birthYear) {
  // defines in global
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1982 && birthYear <= 1996) {
      // var are function scoped
      var millennial = true;
      // const and let vars are block-scoped

      //overwriting a global scope variable
      const firstName = 'steven';
      const str = `Oh and you are a millennial ${firstName}`;
      console.log(str);

      //functions are also block scoped in strict mode... if you turn it off it will work
      function add(a, b) {
        return a + b;
      }

      // redefined a global variable
      // output = 'NEW OUTPUT';

      // initialising a local variable with same name as outer scopes variable. This will not affect the original one.
      const output = 'NEW OUTPUT';
    }
    // console.log(str);
    // we are inside the same function of the var variable inside the block so it is not a ref error
    console.log(millennial);
    console.log(output);

    // block scoped function will break:
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Jonas'; // it is ok eve
calcAge(1991);
// console.log(age);
// printAge();
