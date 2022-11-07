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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  // grab what is typed within the input and log it
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN NO INPUT
  if (!guess) {
    displayMessage('No number');

    // PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('CORRECT!!!! ⚡️⚡️⚡️');
    // body background change when winning
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    //set highscore
    if (score > highscore) {
      console.log('highscore:' + highscore);
      console.log('score:' + score);
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //GUESS TOO HIGh
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too LOOOOOOW');
      score--;
      displayScore(score);
    } else {
      displayMessage('YOU LOST THE GAME');
      displayScore(0);
    }
  }
});

const resetButton = document
  .querySelector('.again')
  .addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
  });
