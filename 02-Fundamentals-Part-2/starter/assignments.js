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

console.log("======LECTURE: Introduction to Objects======");

const myCountry = {
  country: "Albania",
  capital: "Tirana",
  language: "Shqip",
  population: 2,
  neighbours: ["Greece", "Macedonia"],
  describe: function () {
    return `${this.country} has ${this.capital} as capital and has ${this.neighbours.length} neighbouring countries`;
  },
  checkIsland: function () {
    this.neighbours.length == 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
    return this.isIsland;
  },
};
console.table(myCountry);
console.table(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people and a capital called ${myCountry.capital}`
);

console.log("======LECTURE:  Object Methods======");

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

console.log("======LECTURE: LOOPING ARRAYS BREAKING AND CONTINUE======");
// USE POPULATION ARRAY FROM EARLIER

percentage2 = [];
for (let i = 0; i < population.length; i++) {
  const ratio = popRatio(population[i]);
  percentage2.push(ratio);
}
console.log(percentage2);

console.log("======LECTURE: NESTED LOOPS======");

listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (i = 0; i < listOfNeighbours.length; i++) {
  console.log(listOfNeighbours[i]);
  for (j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbhour: ${listOfNeighbours[i][j]}`);
  }
}

console.log("======LECTURE: WHILE LOOPS======");

i = 0;
percentage3 = [];
console.log(population);
while (i < population.length) {
  console.log(population[i]);
  percentage3.push(popRatio(population[i]));
  i++;
}

console.log(percentage3);
console.log(percentage2);
