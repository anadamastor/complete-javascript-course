/*
console.log(40 + 20 - 1);
let js = "amazing";
// if (js === "amazing") alert("Javascript is fun");

console.log("Jonas");
console.log(23);

let firstName = "james";
console.log(firstName);
let javaScript = true;
console.log(javaScript);

console.log(typeof "javaScript");
javaScript = "ciaone";
console.log(javaScript);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// LET CONST AND VAR
// LET for variables that will change later (mutating the var)
let age = 30;
age = 21;

//COST is block scoped
const birthYear = 2323;
// birthYear = 1142;
//Assignment to constant variable.    at script.js:30:11

//VAR prior to ES 6 var declaration (function scoped)
var job = "hello";
job = "teacher";
*/

// BASIC OPERATORS
const now = 2032;
const ageJonas = now - 1991;
const ageSarah = now - 3214;
console.log("jonah is " + ageJonas + " years old", ageSarah ** 3);

//OPERATOR PRECEDENCE
console.log(now - 123 > now - 2324);
let x, y;
s = y = 25 - 1 - 5; // x = y = 10 (left to right)
// but then = is right to left evaluation: y = 10 and then x = 10
// because y = 1=
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// IF ELSE
firstname = "Jonas";
const jonasNew = `Im ${firstname}`;
console.log(jonasNew);

console.log(`string with \n\ multiple \n\ lines`);

const age = 13;

if (age >= 18) {
  console.log("Sarah can start drivin license 😍");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too youg need mode ${yearsLeft} more`);
}

// TYPE COERCION
const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Strig(23));


