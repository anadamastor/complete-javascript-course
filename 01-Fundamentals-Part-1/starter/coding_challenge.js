/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

console.log("THIS IS THE CHALLENGE");
console.log("------------------------------------");

const bill = 310;
let tip = 20;

if (bill >= 50 && bill <= 300) tip = 15;

console.log(
  "the bill was " +
    bill +
    " , the tip was " +
    (tip / 100) * bill +
    " total is " +
    (1 + tip / 100) * bill
);

console.log("THIS IS THE SECOND CHALLENGE");
console.log("------------------------------------");

const massMark = 78;
const heightMark = 1.69;
const massJohn = 96;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark (${BMIMark}) has higher BMI than John (${BMIJohn})`);
} else {
  console.log(`John (${BMIJohn}) has higher BMI than Mark ${BMIMark})`);
}
