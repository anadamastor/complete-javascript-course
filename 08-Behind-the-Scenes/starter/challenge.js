'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams(22 players)
// 4. During the game,BayernMunich (team1) used 3 substitute players.So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd( called 'team1', 'draw' and 'team2')
// 6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// 1 - destructuring an array within an object
const [players1, players2] = game.players;
console.table(players1);

//2 - isolating goalkeeper from the others
const [gk, ...fieldPlayers] = players2;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('// 4', players1Final);

// 5 destructuring an nested object. Initialise the variable, open the object, selcet the key an deconstruct it as you want.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log('5// ', team1, draw, team2);

// 6 - function with variable amount of players: REST PARAMTER WILL AGGREGATE THE PARAMATERS IN ONE ARRAY
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i], ' has scored a goal!');
  }
  console.log(players.length, ' goals in total!');
};

printGoals('Buffon');
printGoals('Buffon', 'kaka', 'ronaldo');
printGoals(...game.scored);

// 7 short circuiting
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

// 115 CODING CHALLENGE PART 2
console.log('115 CODING CHALLENGE PART 2 ---------------');

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5

// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// 1

for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${Number(index) + 1}: ${name}`);
}

// 2
let sum = 0;
let avg = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
avg = sum / Object.values(game.odds).length;
console.log(avg);

// 3
// for (const [team1N, team2N, { team1, x, team2 }] of Object.entries(game)) {
//   console.log(team1N);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odds for ${game[team] ?? 'draw'}: ${odd}`);
}

let scorers = {};
for (const scorer of Object.values(game.scored)) {
  // console.log(scorer);
  // scorer;
  // if (scorers[scorer]) {
  //   scorers[scorer] += 1;
  // } else {
  //   scorers[scorer] = 1;
  // }
  scorers[scorer]++ || (scorers[scorer] = 1);
}
console.log(scorers);
