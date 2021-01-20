'use strict';

// Proof Of Life:
// console.log('hello world!');

// ---------------------------------------------------------------------------------------PLAN OF ATTACK------/
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
// -------------------------------------------------------------------------------------------PLAN OF ATTACK------/

// ask wanderer to provide thier name (name will be used for the duration of the script)
// prompt wanderer to answer 5 questions about ALOYSIOUS
// wanderer responses will be normalized to lowercase as will: y = yes / n = no

var username = prompt('Well hello there wanderer, What\'s your name?').toUpperCase();

// score counter decalred in the begining of code, must appear after each correct answer to tally scores
// an alert at the end of the script will inform the wanderer of thier achieved score

var scoreCounter = 0;

alert('Greeting\'s ' + username + ', it\'s an absolute pleasure to meet you!');
// console.log('INTRUDER ALERT>>>' + username);

// --------------------------------Question 1-----------------------------------------------------------------------/
var pnwAnswer = prompt('Do you think I live in the Pacific Northwest?').toLowerCase();
// console.log('Do you think I live in the Pacific Northwest? ' + pnwAnswer);

if (pnwAnswer === 'yes' || pnwAnswer === 'y') {
  alert('You nailed it!');
  scoreCounter++;
} else if (pnwAnswer === 'no' || pnwAnswer === 'n') {
  alert('That\'s not right but I can see this turning around for you.');
} else {
  alert('Better luck next time ' + username);
}

// --------------------------------Question 2-----------------------------------------------------------------------/
var cageFightAnswer = prompt('Would you believe I\'ve ever fought in cages?').toLowerCase();
// console.log('Would you believe I\'ve ever fought in cages? ' + cageFightAnswer);

if (cageFightAnswer === 'yes' || cageFightAnswer === 'y') {
  alert('You nailed it!');
  scoreCounter++;
} else if (cageFightAnswer === 'no' || cageFightAnswer === 'n') {
  alert('That\'s not right but I can still see this turning around for you.');
} else {
  alert('Are you even typing real words in the prompt box? ' + username);
}
// --------------------------------Question 3-----------------------------------------------------------------------/
var pokeAnswer = prompt('Do you think I like poke?').toLowerCase();
// console.log('Do you think I like poke? ' + pokeAnswer);

if (pokeAnswer === 'no' || pnwAnswer === 'n') {
  alert('Spot on!');
  scoreCounter++;
} else if (pokeAnswer === 'no' || pokeAnswer === 'n') {
  alert('It\'s okay, it\'s not like I told you i didn\'t like it.');
} else {
  alert('I\'m not like most Seattleites in this regard ' + username);
}

// --------------------------------Question 4-----------------------------------------------------------------------/
var skaterAnswer = prompt('Do you think I could have been a sponsored skateboarder in the 90s?').toLowerCase();
// console.log('Do you think I could have been a sponsored skateboarder in the 90s? ' + skaterAnswer);

if (pokeAnswer === 'yes' || skaterAnswer === 'y') {
  alert('I miss those days!');
  scoreCounter++;
} else if (skaterAnswer === 'no' || skaterAnswer === 'n') {
  alert('Sorry ' + username + ', that is incorrect.');
} else {
  alert('Are you here against your will ' + username + '?');
}

// --------------------------------Question 5-----------------------------------------------------------------------/
var forcedHandAnswer = prompt('Did someone make you come here?').toLowerCase();
// console.log('Did someone make you come here? ' + forcedHandAnswer);

if (forcedHandAnswer === 'yes' || forcedHandAnswer === 'y') {
  alert('I wonder who you ticked off ' + username + '....');
  scoreCounter++;
} else if (forcedHandAnswer === 'no' || forcedHandAnswer === 'n') {
  alert('Wow ' + username + ', I feel honored.');
} else {
  alert('Don\'t fret, it\'s almost over now. ' + 'Welcome ' + username + '.');
}

// --------------------------------Question 6-----------------------------------------------------------------------/
// ask wanderer a question, give them 6 chances to get it right
// alert them of the correct answer at the and of the iteration or after they answer correctly

for (var i = 0; i < 4; i++) {
  var answerNumberGuess = prompt('Can you guess my favorite number?...I will give you Four chances.');
  // if answer is guessed correctly
  if (answerNumberGuess === '6') {
    // console.log('You guessed Right' + answerNumberGuess);
    alert('Woah, you nailed it!');
    scoreCounter++;
    break;
    // if answer is too low
  } else if (answerNumberGuess < 6) {
    // console.log('You guessed Low' + answerNumberGuess);
    alert('Too low! Try again.');
    //
  } else if (answerNumberGuess > 6) {
    // console.log('You guessed High' + answerNumberGuess);
    alert('Too high!');
  }
}
alert('The correct answer is 6.');


// --------------------------------Question 7-----------------------------------------------------------------------/
// create an array of possible correct answers
// ask user to guess one / give them 6 tries
// give them a final sccore at the end!

var colorsOfTheRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

var clueGuesses = 6;

var correct = false;

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

alert(`Thanks,  ${username} for playing my game! You scored: ${scoreCounter} / 7.`);
// console.log(`Wanderer ${username} scored ${scoreCounter} +  / 7`);

// -------------------------------------------------------------------------------------------------------FIN---------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&%%%&%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#**.,,.,*/,,,(*(&%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%#*(,..,......   .*,/#(###/&%&%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%(/.       .....      *,*,..*((*%&%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%.,.... ....,,,*,....      ...,,(%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%/... ...*%%%&%%%%%(*/***//*,..,**(%%&%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%#,. ../%&&&&&&&%%%%%##//((((#%%*,(*/#%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%/..,#%%%%%%&&&%%%%%%%%####((#%&@@@&#/,%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%/ .,,(#%%&&&&&&%%%%%%%%%#######%&&@@&%&  *%%%%%%%%%%%%%%%%%%%%%
// %#%%#%#%%%%%%%%*.   ,/#%%%/*,*,**((#######(((//(%@@&@@@#(  .,%%%%%%%%%%%%%%%%%%%
// #%##%#%%%%%%%(,  .%(.###//**,,,***//((((((//**/////#@@%#%%(..(/%%%%%%%%%%%%%%%%%
// %##%%#%#%%%%#,  *%%,,%#(**(&%#/*,,,*(##((/***//////((@@/%%%%.*(%%%%%%%%%%%%%%%%%
// ######%%%###,,.*%%%.*%#((*.    ,**,*%&%(/****/**////(@@,%%%%%.##%%%%%%%%%%%%%%%%
// ############*(,*..  /%%%%///*****(&&&&&%(((//**.../#%@@.%%%%%.(%%%%%%%%%%%%%%%%%
// ############.,,*..  (%&&&&&%%#####%%&&&%(####(/***&@@@@ ../(@@*%%%%%%%%%#%#%%###
// ############....    /&&&&&&%%%#(//&&&%%###((#%%%@@@@@@%.../..,,%%%%%%%%%########
// %###########        #%#%@&&/(##%%(//((/((/((((#%%%&@@@ ......,*%%%%%############
// %%%#########..    &&&&&&@@&&(.,%&%&/****///((((,###&&#   ....,(%%%##############
// %%%#########*,.&%&#&&&&&&@&&%#..,,***/////((((((/((%%.     ...%#%###############
// %%#%##########%/(/&&&&&&&&&&&&%#%%#(((((((/*.,,/((((*/      .*##%###############
// %%%%%###########.%&%&&#(((##%&&&&&&&#//(((((/((((((/*#%#/,(%%###################
// %%%%%###########%%&%#//////(#%%%&&&&&@@@%/(((//////%%%/%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%##############(/////////(((#%%&&&&&&@@//////@%%%%%%%%%%%%%%%%%%%%%%%%%###((
// %%%%%#%%##########%#******//////####%%&&&&@@@//%#&&@@@%%%%%%##%((#%%%%((#%%&&#((
// %%%###%%%#######%%#//*********//(#(%%&&&&&&&@((%/@@(%@&&(/*,,,*,,,,,,**/(/,,(#(%
// %%%%%%%%#######%%%%%%%,,,,,**//##(#((///(/#@&# %&&@@.(%&*,,,,.  . ... ,**  .**((
// %%%#%%#%########(,,./,*,#,,,,(##/#/(*((/(/*///(#&&@@((%*,.     .       */  ..**/
// %%%%%%%####/,**/..../.*.%%/%&,#(#//*(/*/*,(*,,*,.%#@*((... .        . ../   .,/,
// %##///,...../*..*,.  ,,*,&%&%#//#((/,//.//,,**,,,,(&(*,.                *     .
// ....,..........   .....,,/%#(%((,((*(/***,,.,,,.,,,/                    ..
// ,,.,. ...**... ......... /##(#*((,/(,(*.*,,,,.,*(&*.    .                *
// .. . ... .....     .,,,*((((/((/(/,*/,,*.,,,.   .,/..
// ....    .  .. ....,,,........,(*/*/*.**.,.,  ., .,,
//     ..........,..*/*.,,...........**/*,,.,.   . .*                        .
// .....      ..  .,....,,.*.,...  .....,,,,,      .(..
// . .           ...........,.*..... .    ,..      .#
// ...         ,..... ............. ....  ..       *.     ALOYSIOUS [ they / them ]
// ..........***,,,,. .... ....    . . ...,        *    .
// .........,...*.*.,.,..  ..        ....,*       ..
// .................................................................................|
//..................... <<<<<<<< SPECIAL THANKS TO >>>>>>>>........................|
//#################################################################################|
//#       ::IN COLLABORATION WITH::      |        ::CONTRIBUTION SCOPE::          #|
//#       =========================      |         =====================          #|
//#  Kassie Bradshaw and Patrick Laurion | Numbers Guessing Game [Questions 1-5]  #|
//#                      Kassie Bradshaw | Numbers Guessing Game [Question 6]     #|
//#  Accountability Buddy ^^^^^ʕʘ̅͜ʘ̅ʔ^^^^^ |                                        #|
//#                       Garfield Grant | Loop Thoery [Question 7]               #|
//#                          Tom McGuire | Introduced Counter Variable Concept    #|
//#  Accountability Buddy ^^^^^ʕʘ̅͜ʘ̅ʔ^^^^^ |                                        #|
//#################################################################################|