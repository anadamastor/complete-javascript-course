'use strict';

// Selecting elements from DOM:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const newGame = document.querySelector('.btn--new');

// Initial default values

let playing, scores, activePlayer, currentScore;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  //switch to next player (FROM ZERO TO ONE)
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // will add if class not there but will remove if present.
  player1El.classList.toggle('player--active'); // will add if class not there but will remove if present.
};

// Rolling dice functionality.
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1-generate a random roll
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    // 2-display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3-check if 1 > reset score
    if (dice !== 1) {
      //add dice to current score.hhhh
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.add('hidden');
    // add current score to active player score
    scores[activePlayer] += currentScore;
    // check if player score is >100
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // finish the game if score >= 0
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
    }
    switchPlayer();
  }
});

newGame.addEventListener('click', init);
