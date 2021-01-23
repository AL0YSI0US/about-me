'use strict';

var username = prompt('Well hello there wanderer, What\'s your name?').toUpperCase();

var scoreCounter = 0;

alert('Greeting\'s ' + username + ', it\'s an absolute pleasure to meet you!');

function nativeBorn() {
  var pnwAnswer = prompt('Do you think I live in the Pacific Northwest?').toLowerCase();

  if (pnwAnswer === 'yes' || pnwAnswer === 'y') {
    alert('You nailed it!');
    scoreCounter++;
  } else if (pnwAnswer === 'no' || pnwAnswer === 'n') {
    alert('That\'s not right but I can see this turning around for you.');
  } else {
    alert('Better luck next time ' + username);
  }
}


function beastMode() {
  var cageFightAnswer = prompt('Would you believe I\'ve ever fought in cages?').toLowerCase();

  if (cageFightAnswer === 'yes' || cageFightAnswer === 'y') {
    alert('You nailed it!');
    scoreCounter++;
  } else if (cageFightAnswer === 'no' || cageFightAnswer === 'n') {
    alert('That\'s not right but I can still see this turning around for you.');
  } else {
    alert('Are you even typing real words in the prompt box? ' + username);
  }
}

function badFish() {
  var pokeAnswer = prompt('Do you think I like to eat poke?').toLowerCase();

  if (pokeAnswer === 'no' || pokeAnswer === 'n') {
    alert('Spot on!');
    scoreCounter++;
  } else if (pokeAnswer === 'yes' || pokeAnswer === 'y') {
    alert('It\'s okay, it\'s not like I told you I didn\'t like it.');
  } else {
    alert('I\'m not like most Seattleites in this regard ' + username);
  }
}

function evansBoardsSports() {
  var skaterAnswer = prompt('Do you think I could have been a sponsored skateboarder in the 90s?').toLowerCase();

  if (skaterAnswer === 'yes' || skaterAnswer === 'y') {
    alert('I miss those days!...Shoutout to Evans Board Sports');
    scoreCounter++;
  } else if (skaterAnswer === 'no' || skaterAnswer === 'n') {
    alert('Sorry ' + username + ', that is incorrect.');
  } else {
    alert('Are you here against your will ' + username + '?');
  }
}

function hereByWill() {
  var forcedHandAnswer = prompt('Did someone make you come here?').toLowerCase();

  if (forcedHandAnswer === 'yes' || forcedHandAnswer === 'y') {
    alert('I wonder who you ticked off ' + username + '....');
    scoreCounter++;
  } else if (forcedHandAnswer === 'no' || forcedHandAnswer === 'n') {
    alert('Wow ' + username + ', I feel honored.');
  } else {
    alert('Don\'t fret, it\'s almost over now. ' + 'Welcome ' + username + '.');
  }
}

function theNumberSix() {
  for (var i = 0; i < 4; i++) {
    var answerNumberGuess = prompt('Can you guess my favorite number?...I will give you Four chances.');
    if (answerNumberGuess === '6') {
      alert('Woah, you nailed it!');
      scoreCounter++;
      break;
    } else if (answerNumberGuess < 6) {
      alert('Too low! Try again.');
    } else if (answerNumberGuess > 6) {
      alert('Too high!');
    }
  }
  alert('The correct answer is 6.');
}

var colorsOfTheRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

var clueGuesses = 6;

var correct = false;
function lastRainbow() {
  for (var i = 0; i < clueGuesses; i++) {
    var questionSeven = prompt(`${username} There are six colors that are pretty universally recognized as the colors of the rainbow, can you guess any?`);

    for (var j = 0; j < colorsOfTheRainbow.length; j++) {
      if (questionSeven === colorsOfTheRainbow[j]) {
        alert(`You are Correct! ${colorsOfTheRainbow[j]} is a color that lives within the rainbow!`);
        correct = true;
        scoreCounter++;
      }
    } if (correct) {
      break;
    }
    if (i === clueGuesses || correct) {
      alert(`The colors of the rainbow are ${colorsOfTheRainbow}`);
    }
  }
}
nativeBorn();
beastMode();
badFish();
evansBoardsSports();
hereByWill();
theNumberSix();
lastRainbow();

alert(`Thanks,  ${username} for playing my game! You scored: ${scoreCounter} / 7.`);
