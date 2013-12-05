// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// Expressions: Wacky
// 12/04/2013

// For this problem the user will guess, "How many Muppets would it take to move my house?"

// Decalaring variables here.

// setting the initial muppet count to 20 using an array.
var muppetCount = [20, 10];
var totalMuppets;
var rooms;
var miles;
var guess;
var guessDifference;


// prompting the user to guess the total muppets, then storing the guess in the variable guess.
guess = prompt("Guess how many Muppets it would take to move your house! (numbers only please)");

// asking user how many rooms their house has using a prompt, then storing their answer in the variable rooms.
rooms = prompt("How many rooms does your house have?");

// asking user how far they will be moving their house, in miles, then storing their answer in the variable miles.
miles = prompt("How many miles will the Muppets be moving your house?");

// setting the amount of rooms to be rebuilt by multiplying rooms by 3 and saving the result to rooms.
rooms *= 3;

if (miles >= 100) {
	muppetCount[1] = 100;
	rooms -= Number(rooms);
} else if (miles >= 10) {
	muppetCount[1] = 20;
	rooms -= 1;
} else if (miles <= 9) {
	muppetCount[0] /= 2;
}

totalMuppets = muppetCount[0] + muppetCount[1];

guessDifference = Number(totalMuppets) - Number(guess);

totalMuppets /= 2;


console.log(muppetCount[0], muppetCount[1], rooms);