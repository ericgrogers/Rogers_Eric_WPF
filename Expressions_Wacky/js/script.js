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

// if the miles entered by the user is greater than or equal to 100, set the muppetCount[1] to 100. Then subtract the number of rooms from rooms (to get 0).
if (miles >= 100) {
	muppetCount[1] = 100;
	rooms -= Number(rooms);
	
// or, if miles is greater than or equal to 10, set the muppetCount[1] to 20 and then subtract 1 from rooms.
} else if (miles >= 10) {
	muppetCount[1] = 20;
	rooms -= 1;

// otherwise, if miles is less than or equal to 9, divide the muppetCount[0] by 2.
} else if (miles <= 9) {
	muppetCount[0] /= 2;
}

// adding muppetCount[0] and muppetCount[1] then saving the result in totalMuppets.
totalMuppets = muppetCount[0] + muppetCount[1];

// subtracting the user's guess from the totalMuppets to get the guessDifference.
guessDifference = Number(totalMuppets) - Number(guess);

// dividing the totalMuppets by 2.
totalMuppets /= 2;

// if the guessDifference is equal to 0 (which means the user guessed correctly), send a console message and prompt message of the entire results.
if (guessDifference == 0) {
	console.log("You guessed that it would take " + guess + " Muppets to move your house and you were right! \nIt took " + totalMuppets + " Muppets to cut your house up and move it " + miles + " miles, and " + totalMuppets + " Muppets to rebuild it in it's new place. \nYou might be happy to know that your house now has " + rooms + " rooms!");
	
	alert ("You guessed that it would take " + guess + " Muppets to move your house and you were right! \nIt took " + totalMuppets + " Muppets to cut your house up and move it " + miles + " miles, and " + totalMuppets + " Muppets to rebuild it in it's new place. \nYou might be happy to know that your house now has " + rooms + " rooms!");

// otherwise, tell the user the difference between their guess and the actual number of muppets in a console.log and an alert message, along with the entire results.	
} else {
	console.log("You guessed that it would take " + guess + " Muppets to move your house and you were off by " + guessDifference + " Muppets. \nIt took " + totalMuppets + " Muppets to cut your house up and move it " + miles + " miles, and " + totalMuppets + " Muppets to rebuild it in it's new place. \nYou might be happy to know that your house now has " + rooms + " rooms!");
	alert("You guessed that it would take " + guess + " Muppets to move your house and you were off by " + guessDifference + " Muppets. \nIt took " + totalMuppets + " Muppets to cut your house up and move it " + miles + " miles, and " + totalMuppets + " Muppets to rebuild it in it's new place. \nYou might be happy to know that your house now has " + rooms + " rooms!");
}