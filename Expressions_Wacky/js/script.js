// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// Expressions: Wacky
// 12/04/2013

// For this problem the user will guess, "How many Muppets would it take to move my house?"

// Decalaring variables here.

// setting the initial muppet count to 20 using an array.
var muppetCount = [20];
var rooms;
var miles;
var guess;

// prompting the user to guess the total muppets, then storing the guess in the variable guess.
guess = prompt("Guess how many Muppets it would take to move your house! (numbers only please)");

// asking user how many rooms their house has using a prompt, then storing their answer in the variable rooms.
rooms = prompt("How many rooms does your house have?");

// asking user how far they will be moving their house, in miles, then storing their answer in the variable miles.
miles = prompt("How many miles will the Muppets be moving your house?").