// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1 need all unique events
const events = [...new Set(gameEvents.values())];
console.log(events);
// [ '⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' ]

gameEvents.delete(64);
console.log(gameEvents);

// calculate average of event timing
const minutes = gameEvents.keys();
console.log(minutes);

// length of a map with .size and retrieving last item of an array with pop()
const lastEvent = [...gameEvents.keys()].pop();
const communication = `An event happened, on average, every ${
  lastEvent / gameEvents.size
} minutes`;
console.log(communication);

for (const [time, event] of gameEvents) {
  whatHalf = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${whatHalf} HALF] ${time}: ${event}`);
}

// ====================================================================
// Coding challenge 4
// ====================================================================
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const varToFix = document.querySelector('textarea');
const button = document.querySelector('button');

console.log(button);

button.addEventListener('click', () => {
  const variables = varToFix.value.toLowerCase();

  // splitting lines by new line command (\n)
  const varsByLine = variables.split('\n');

  for (const varLine of varsByLine) {
    const [first, second] = varLine.trim().split('_');
    const output =
      // how to capitalise the second letter using replace: very cool
      `${first}${second.replace(second[0], second[0].toLocaleUpperCase())}`;

    console.log(
      // we want the icons to start after a while, that's why the padend

      output.padEnd(20) + '⚡️'.repeat(varsByLine.indexOf(varLine) + 1)
    );
  }
});
