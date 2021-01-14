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

// Ask questionOne: 'Do you think I live in the Pacific Northwest?'
//  if y:
//  else if:
//    else: 
// Ask questionTwo: 'Would you believe I\'ve ever fought in cages?'
//  if y:
//  if n:
//    else if: 
// Ask questionThree: 'Do you think I like poke?'
//  if y:
//  if n:
//    else if: 
// Ask questionFour: 'Do you think I could have been a sponsored skateboarder in the 90s?'
//  if y:
//  if n:
//    else if: 
// Ask questionFive: 'Did someone make you come here?'
//  if y: ALERT: 'I wonder who you ticked off...'
//  if n: wow USERNAME i feel honored.
//    else if: no worries were done USERNAME
// ------------------------------------------------------------------------------PLAN OF ATTACK/ 

var username = prompt('Well hello there wanderer, What\'s your name?');
alert('Greeting\'s ' + username + ', it\'s a pleasure to meet you!'); 

// question one
var questionOne = prompt('Do you think I live in the Pacific Northwest?').toLowerCase(); 

if(questionOne === 'yes' || questionOne === 'y') {
  console.log('You nailed it!');
  alert('You nailed it!'); 
} else if(questionOne ==='no' || questionOne === 'n') {
  alert('That\'s not right but I can see this turning around for you.'); 
} else {
  alert('Better luck next time ' + username)
}
// question two
var questionTwo = prompt('Would you believe I\'ve ever fought in cages?').toLowerCase(); 

if(questionTwo === 'yes' || questionTwo === 'y') {
  console.log('You nailed it!');
  alert('You nailed it!'); 
} else if(questionTwo ==='no' || questionTwo === 'n') {
  alert('That\'s not right but I can still see this turning around for you.'); 
} else {
  alert('Are you even typing real words in the prompt box? ' + username)
}
// question three
var questionThree = prompt('Do you think I like poke?').toLowerCase(); 

if(questionThree === 'no' || questionOne === 'n') {
  console.log('Spot on!');
  alert('Spot on!'); 
} else if(questionThree ==='no' || questionThree === 'n') {
  alert('It\'s okay, it\'s not like I told you i didn\'t like it.'); 
} else {
  alert('I\'m not like most Seattleites in this regard ' + username)
}

// question four
var questionFour = prompt('Do you think I could have been a sponsored skateboarder in the 90s?').toLowerCase(); 

if(questionThree === 'yes' || questionFour === 'y') {
  console.log('I miss those days!');
  alert('I miss those days!'); 
} else if(questionFour ==='no' || questionFour === 'n') {
  alert('Sorry ' + username + ', that is incorrect.'); 
} else {
  alert('Are you here against your will ' + username + '?')
}

// question five
var questionFive = prompt('Did someone make you come here?').toLowerCase(); 
console.log(questionFive);

if(questionFive === 'yes' || questionFive === 'y') {
  console.log('I wonder who you ticked off...');
  alert('I wonder who you ticked off...'); 
} else if(questionFive ==='no' || questionFive === 'n') {
  alert('Wow ' + username + ', I feel honored.'); 
} else {
  alert('Don\'t fret, it\'s all over now. ' + 'Welcome ' + username + '.')
}