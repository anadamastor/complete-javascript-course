// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("hi");

// problem: calculate amplitude of temperatures

const temperatures = [3, -2, -6, -1, "error", 9, 12, 13, 17, 16, 14, 9, 5, 22];
const temperatures2 = [33, 3134, -2, -6, -1, "error", 9, 12, 13, 22];

// initialize min and max to calculate amplitude
let min = +Number.MAX_VALUE;
let max = -Number.MAX_VALUE;

const calcTempAmplitude = function (temps) {
  // loop in array
  for (let i = 0; i < temps.length; i++) {
    // console.log(temps[i]);
    const numToTest = temps[i];
    // if num < min then min = num

    if (typeof numToTest != "number") {
      continue;
    }
    console.log(typeof numToTest);
    debugger;
    if (numToTest < min) min = numToTest;
    if (numToTest > max) max = numToTest;
  }
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

// function now needs to implement two functionalitys.

// merge two arrays

const calTempAmplitudeMultiArrays = function (arr1, arr2) {
  const megaArray = arr1.concat(arr2);
  return calcTempAmplitude(megaArray);
};
console.log(calTempAmplitudeMultiArrays(temperatures, temperatures2));

// DEbugging
const measureKelvin = function () {
  const measures = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("degrees celsius:")),
  };
  console.log(measures);
  console.table(measures);

  const kelvin = measures.value + 273;
  return kelvin;
};

console.log(measureKelvin());
