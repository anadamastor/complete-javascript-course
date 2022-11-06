'use strict';

// // reading a content of the element
// console.log(document.querySelector('.message').textContent);

// //write the content of the element
// document.querySelector('.message').textContent = '🙈 Correct Number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 234;

// // Editing the input
// document.querySelector('.guess').value = 222;

// //event listener
document.querySelector('.check').addEventListener('click', function () {
  // grab what is typed within the input and log it
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
});
