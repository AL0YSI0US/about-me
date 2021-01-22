'use strict';

//                             ░  █████╗░██╗░░░░░░█████╗░██╗░░░██╗░██████╗██╗░█████╗░██╗░░░██╗░██████╗
//                               ██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██║██╔══██╗██║░░░██║██╔════╝
//                               ███████║██║░░░░░██║░░██║░╚████╔╝░╚█████╗░██║██║░░██║██║░░░██║╚█████╗░
//                               ██╔══██║██║░░░░░██║░░██║░░╚██╔╝░░░╚═══██╗██║██║░░██║██║░░░██║░╚═══██╗
//                               ██║░░██║███████╗╚█████╔╝░░░██║░░░██████╔╝██║╚█████╔╝╚██████╔╝██████╔╝
//                               ╚═╝░░╚═╝╚══════╝░╚════╝░░░░╚═╝░░░╚═════╝░╚═╝░╚════╝░░╚═════╝░╚═════╝░
// > > > Proof Of Life...
// console.log('Revolution is not a one time event. -Audre Lorde');
// ----------------------------------------------------------------------------------------PLAN OF ATTACK [SCRIPT]---/
// 1. Get > [username] and > offer them a (greeting).
// 2. Ask the user [5] questions about > > > ALOYSIOUS < < < They MUST accept ['yes'] or ['no'] in ANY case.
// 3. Normalize reponses to reduce coding efforts to > .lowerCase();
// 4. Print to console to confirm between iterations if desired | Comment out when not in use.
// 5. Make art for therapy when, repeat as needed.
// ---------------------------------------------------------------------------------------------[Questions 1 - 5]----/
// Ask pnwAnswer: 'Do you think I live in the Pacific Northwest?' [= (YES)]
//  if y: 'You nailed it!'
//     else if: That\'s not right but I can see this turning around for you.'
//          else: 'Better luck next time ' + username
// Ask cageFightAnswer: 'Would you believe I\'ve ever fought in cages?' [= (YES)]
//  if y: 'You nailed it!'
//     else if: 'That\'s not right but I can still see this turning around for you.'
//          else: 'Are you even typing real words in the prompt box? ' + username
// Ask pokeAnswer: 'Do you think I like poke?' [= (NO)]
//  if y: 'Spot on!'
//     else if: 'It\'s okay, it\'s not like I told you i didn\'t like it.'
//          else: 'I\'m not like most Seattleites in this regard ' + username
// Ask skaterAnswer: 'Do you think I could have been a sponsored skateboarder in the 90s?' [= (YES)]
//  if y: 'I miss those days!'
//     else if: 'Sorry ' + username + ', that is incorrect.'
//          else: 'Are you here against your will ' + username + '?'
// Ask forcedHandAnswer: 'Did someone make you come here?' [= (YES)]
//  if y: 'I wonder who you ticked off ' + username + '....''
//     else if: 'Wow ' + username + ', I feel honored.'
//           else: 'Don\'t fret, it\'s almost over now. ' + 'Welcome ' + username + '.'
// ----------------------------------------------------------------------------------------PLAN OF ATTACK-------------/
var username = prompt('Well hello there wanderer, What\'s your name?').toUpperCase();

var scoreCounter = 0;
// score counter decalred in the begining of code, must appear after each correct answer to tally scores
// an alert at the end of the script will inform the wanderer of thier achieved overall score.

alert('Greeting\'s ' + username + ', it\'s an absolute pleasure to meet you!');
// console.log('INTRUDER ALERT>>>' + username);
// --------------------------------Question 1-----------------------------------------------------------------------/
function nativeBorn() {
  var pnwAnswer = prompt('Do you think I live in the Pacific Northwest?').toLowerCase();
  // console.log('Do you think I live in the Pacific Northwest? ' + nativeBorn);

  if (pnwAnswer === 'yes' || pnwAnswer === 'y') {
    alert('You nailed it!');
    scoreCounter++;
  } else if (pnwAnswer === 'no' || pnwAnswer === 'n') {
    alert('That\'s not right but I can see this turning around for you.');
  } else {
    alert('Better luck next time ' + username);
  }
}

// --------------------------------Question 2-----------------------------------------------------------------------/
function beastMode() {
  var cageFightAnswer = prompt('Would you believe I\'ve ever fought in cages?').toLowerCase();
  // console.log('Would you believe I\'ve ever fought in cages? ' + beastMode);

  if (cageFightAnswer === 'yes' || cageFightAnswer === 'y') {
    alert('You nailed it!');
    scoreCounter++;
  } else if (cageFightAnswer === 'no' || cageFightAnswer === 'n') {
    alert('That\'s not right but I can still see this turning around for you.');
  } else {
    alert('Are you even typing real words in the prompt box? ' + username);
  }
}

// --------------------------------Question 3-----------------------------------------------------------------------/
function badFish() {
  var pokeAnswer = prompt('Do you think I like poke?').toLowerCase();
  // console.log('Do you think I like poke? ' + badFish);

  if (pokeAnswer === 'no' || pokeAnswer === 'n') {
    alert('Spot on!');
    scoreCounter++;
  } else if (pokeAnswer === 'no' || pokeAnswer === 'n') {
    alert('It\'s okay, it\'s not like I told you i didn\'t like it.');
  } else {
    alert('I\'m not like most Seattleites in this regard ' + username);
  }
}

// --------------------------------Question 4-----------------------------------------------------------------------/
function evansBoardsSports() {
  var skaterAnswer = prompt('Do you think I could have been a sponsored skateboarder in the 90s?').toLowerCase();
  // console.log('Do you think I could have been a sponsored skateboarder in the 90s? ' + evansBoardsSports);

  if (skaterAnswer === 'yes' || skaterAnswer === 'y') {
    alert('I miss those days!');
    scoreCounter++;
  } else if (skaterAnswer === 'no' || skaterAnswer === 'n') {
    alert('Sorry ' + username + ', that is incorrect.');
  } else {
    alert('Are you here against your will ' + username + '?');
  }
}

// --------------------------------Question 5-----------------------------------------------------------------------/
function hereByWill() {
  var forcedHandAnswer = prompt('Did someone make you come here?').toLowerCase();
  // console.log('Did someone make you come here? ' + hereByWill);

  if (forcedHandAnswer === 'yes' || forcedHandAnswer === 'y') {
    alert('I wonder who you ticked off ' + username + '....');
    scoreCounter++;
  } else if (forcedHandAnswer === 'no' || forcedHandAnswer === 'n') {
    alert('Wow ' + username + ', I feel honored.');
  } else {
    alert('Don\'t fret, it\'s almost over now. ' + 'Welcome ' + username + '.');
  }
}

// --------------------------------Question 6----------------------------------------------PLAN OF ATTACK-------------/
// 1. Ask wanderer a question, they must input the correct answer to get a point.
// 2. Give them [6] chances to guess correctly.
// 3. Alert them of the correct answer at the and of the iteration [or] after they answer correctly.
// ----------------------------------------------------------------------------------------PLAN OF ATTACK-------------/
function theNumberSix() {
  for (var i = 0; i < 4; i++) {
    var answerNumberGuess = prompt('Can you guess my favorite number?...I will give you Four chances.');
    // if answer is guessed correctly
    if (answerNumberGuess === '6') {
      // console.log('You guessed Right' + theNumberSix);
      alert('Woah, you nailed it!');
      scoreCounter++;
      break;
      // if answer is too low
    } else if (answerNumberGuess < 6) {
      // console.log('You guessed Low' + theNumberSix);
      alert('Too low! Try again.');
      //
    } else if (answerNumberGuess > 6) {
      // console.log('You guessed High' + theNumberSix);
      alert('Too high!');
    }
  }
  alert('The correct answer is 6.');
}

// --------------------------------Question 7----------------------------------------------PLAN OF ATTACK-------------/
// 1. Create an array to store possible correct answers.
// 1. Ask wanderer a question, they must guess an item out of the array to get a point.
// 2. Give them [6] chances to guess correctly.
// 3. Give them a final sccore at the end!
// ----------------------------------------------------------------------------------------PLAN OF ATTACK-------------/

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
// console.log(`Wanderer ${username} scored ${scoreCounter} +  / 7`);

// -----------------------------------------------------------------------------------------------FIN---------x
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
// ................................................................................|
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
//#                       Qadree Trimble | Code Conversion-►Numbers Guessing Game #|
//#                                      | [Questions 1-7] Variables to Functions #|
//#################################################################################|
//      █─▄▄▄─█─▄▄─█▄─▄▄▀█▄─▄▄─█▄─▄▄─█▄─▄▄─█▄─▄███▄─▄███─▄▄─█▄─█▀▀▀█─▄█─▄▄▄▄█
//      █─███▀█─██─██─██─██─▄█▀██─▄████─▄█▀██─██▀██─██▀█─██─██─█─█─█─██▄▄▄▄─█
//      ▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▀▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▀▄▄▄▀▄▄▄▀▀▄▄▄▄▄▀
//                             █▀▄▄▀█─▄▄─█▀▄▄▀█▀░██
//                             ██▀▄██─██─██▀▄███░██
//                             ▀▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▄▄▄▀