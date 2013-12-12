// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/11/2013
// Conditionals: Wacky

/* For this program, the user is going to have a snowball fight with Frosty the Snowman. The program asks the user for their name, and then asks if they would like to see the rules for the game. When the game starts, the computer generates a random number between 1 and 5 and then asks the user to guess at the number. If the user get it right, it records a hit, otherwise, the user misses and then the computer takes a turn. The computer will make a random guess and then it goes back to the user. Both the user and Frosty will guess 3 times, and then the hits will be totaled. Then it will declare a winner, or a tie will occur.*/

// set up the variables

var userName; // hold the user's name
var frostyGuess = Math.floor(Math.random() * 5 + 1); // generates a random guess for Frosty.
var hit; // random number that the user and Frosty will try to guess.
var userGuess; // the user's guess.
var yesOrNo; // stores the user's "yes" or "no" choice.
var totalUserHits = 0; // stores the user's hit count.
var totalFrostyHits = 0; // stores Frosty's hit count.
var results; // stores the final results.
var rules = "You and Frosty are going to take turns throwing snowballs. You will guess a number from 1 to 5 and try to hit Frosty more times than he hits you! You only have 3 snowballs, so make them count!"; // stores the rules for the game.
