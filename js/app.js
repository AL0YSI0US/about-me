'use strict';

// console.log('hello world!');

// var banana = 42;

// if(banana){
// console.log(banana);
// }

// console.log(banana);

// PLAN OF ATTACK------------------------------------------------------------------------------/
// 1. get username and offer them a greeting
// 2. Ask user 5 questions. they MUST accept yes or no in ANY case
// normalize reponses to reduce coding efforts to .lowerCase();
// print to console to confirm //

// Ask pnwAnswer: 'Do you think I live in the Pacific Northwest?'
//  if y:
//  else if:
//    else:
// Ask cageFightAnswer: 'Would you believe I\'ve ever fought in cages?'
//  if y:
//  if n:
//    else if:
// Ask pokeAnswer: 'Do you think I like poke?'
//  if y:
//  if n:
//    else if:
// Ask skaterAnswer: 'Do you think I could have been a sponsored skateboarder in the 90s?'
//  if y:
//  if n:
//    else if:
// Ask forcedHandAnswer: 'Did someone make you come here?'
//  if y: ALERT: 'I wonder who you ticked off...'
//  if n: wow USERNAME i feel honored.
//    else if: no worries were done USERNAME
// ------------------------------------------------------------------------------PLAN OF ATTACK/

var username = prompt('Well hello there wanderer, What\'s your name?');
alert('Greeting\'s ' + username + ', it\'s a pleasure to meet you!');
// console.log('INTRUDER ALERT' + username);

// question one
var pnwAnswer = prompt('Do you think I live in the Pacific Northwest?').toLowerCase();
// console.log('Do you think I live in the Pacific Northwest? ' + pnwAnswer);

if (pnwAnswer === 'yes' || pnwAnswer === 'y') {
  alert('You nailed it!');
} else if (pnwAnswer === 'no' || pnwAnswer === 'n') {
  alert('That\'s not right but I can see this turning around for you.');
} else {
  alert('Better luck next time ' + username);
}

// question two
var cageFightAnswer = prompt('Would you believe I\'ve ever fought in cages?').toLowerCase();
// console.log('Would you believe I\'ve ever fought in cages? ' + cageFightAnswer);

if (cageFightAnswer === 'yes' || cageFightAnswer === 'y') {
  alert('You nailed it!');
} else if (cageFightAnswer === 'no' || cageFightAnswer === 'n') {
  alert('That\'s not right but I can still see this turning around for you.');
} else {
  alert('Are you even typing real words in the prompt box? ' + username);
}
// question three
var pokeAnswer = prompt('Do you think I like poke?').toLowerCase();
// console.log('Do you think I like poke? ' + pokeAnswer);

if (pokeAnswer === 'no' || pnwAnswer === 'n') {
  alert('Spot on!');
} else if (pokeAnswer === 'no' || pokeAnswer === 'n') {
  alert('It\'s okay, it\'s not like I told you i didn\'t like it.');
} else {
  alert('I\'m not like most Seattleites in this regard ' + username);
}

// question four
var skaterAnswer = prompt('Do you think I could have been a sponsored skateboarder in the 90s?').toLowerCase();
// console.log('Do you think I could have been a sponsored skateboarder in the 90s? ' + skaterAnswer);

if (pokeAnswer === 'yes' || skaterAnswer === 'y') {
  alert('I miss those days!');
} else if (skaterAnswer === 'no' || skaterAnswer === 'n') {
  alert('Sorry ' + username + ', that is incorrect.');
} else {
  alert('Are you here against your will ' + username + '?');
}

// question five
var forcedHandAnswer = prompt('Did someone make you come here?').toLowerCase();
// console.log('Did someone make you come here? ' + forcedHandAnswer);

if (forcedHandAnswer === 'yes' || forcedHandAnswer === 'y') {
  alert('I wonder who you ticked off ' + username + '....');
} else if (forcedHandAnswer === 'no' || forcedHandAnswer === 'n') {
  alert('Wow ' + username + ', I feel honored.');
} else {
  alert('Don\'t fret, it\'s all over now. ' + 'Welcome ' + username + '.');
}

// PLAN OF ATTACK------------------------------------------------------------------------------/
// add another question [question6]
// Have the user guess a numeric value [value=6]
// give the user 4 attempts [counter], display an [alert] that lets them know if the guess was too high of too low
// if correct display [alert]
//
//
//
//