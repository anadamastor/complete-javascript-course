// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const population = [234234, 3333, 455, 32324];

const hasFourValues = population.length === 4 ? true : false;
console.log(hasFourValues);

const popRatio = (population) =>
  (population / (234234 + 3333 + 455 + 32324)) * 100;
console.log(popRatio(100000));

const ratioArray = new Array();
console.log(ratioArray);
population.forEach((popul) => ratioArray.push(popRatio(popul)));
console.log(ratioArray);

console.log("======LECTURE: Basic Array Operations (Methods)=======");
const neighbors = new Array("Italy", "France", "United Kingdom");
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop("Utopia");
console.log(neighbors);

if (!neighbors.includes("Germany"))
  console.log("Probably not a central European country :D");

neighbors[neighbors.indexOf("France")] = "Not France";
console.log(neighbors);
