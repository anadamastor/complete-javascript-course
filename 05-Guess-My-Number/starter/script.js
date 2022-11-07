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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  // grab what is typed within the input and log it
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    // PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT!!!! ⚡️⚡️⚡️';

    // body background change when winning
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    //GUESS TOO HIGN
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      updateScore(score);
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }

    //GUESS TO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too LOOOOOOW';
      score--;
      updateScore(score);
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const updateScore = score =>
  (document.querySelector('.score').textContent = score);
