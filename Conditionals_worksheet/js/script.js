// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/07/2013
// Conditionals Worksheet

// Group 1 : Expressions with Conditionals.
// Last Chance for Gas!

// declaring the givens as variables
var gasEfficiency ;
var gasGauge ;
var tankCapacity ;

// declaring variable for total gallons of gas in the car's tank.
var gallonsInTank ;

// declaring variable for the total miles that the car can go.
var totalMiles ;

// declaring a variable to hold the final results.
var results ;

// asking user to enter the fuel efficiency of their vehicle with a prompt.
gasEfficiency = prompt("How many miles per gallon does your vehicle get?");

// asking user to enter the reading of their gas gauge with a prompt.
gasGauge = prompt("Please enter the readout of your gas gauge, where 0 is empty, and 100 is full.");

// ask the user for the capacity of the gas tank.
tankCapacity = prompt("How many gallons of gas does the car's tank hold?");

// divide gasGauge by 100 to get the percentage in decimal form, then multiply by tankCapacity to get the gallonsInTank.
gallonsInTank = Number(gasGauge) / 100 * Number(tankCapacity);

// divide gasGauge by 100 to get the percentage in decimal form, then multiply by tankCapacity, then multiply by gasEfficiency to get totalMiles car can travel.
totalMiles = Number(gasGauge) / 100 * Number(tankCapacity) * gasEfficiency;

// if the totalMiles are greater than 200, results =  "Yes, you can make it..." otherwise, results = "You only have gallonsInTank ..."
results = (totalMiles > 200) ? "Yes, you can make it without stopping for gas!" : "You only have " + gallonsInTank + " gallons of gas in your tank, better get gas now while you can!";

// outputting results to the console.
console.log(results);

// creating an alert with the results.
alert(results);




// Group 2 : Multiple Results
// Grade Letter Calculator

// declaring the givens as variables.
var grade ;

// declaring variable for the letter grade results.
var letterGrade ;

// ask the user to enter their grade percentage using a prompt and store it in the grade variable.
grade = prompt("Please enter your grade percentage, (numbers only please).");

// checking the grade percentage and returning the proper letter grade.
// if the percentage is from 95 to 100, letterGrade is A+.
if (grade >= 95) {
	letterGrade = "A+";

// otherwise, if the percentage is 90 or above, letterGrade is A.
}else if (grade >= 90) {
	letterGrade = "A";
	
// otherwise, if the percentage is 85 or above, letterGrade is B+.
}else if (grade >= 85) {
	letterGrade = "B+";
	
// otherwise, if the percentage is 80 or above, letterGrade is B.
}else if (grade >= 80) {
	letterGrade = "B";
	
// otherwise, if the percentage is 76 or above, letterGrade is C+.
}else if (grade >= 76) {
	letterGrade = "C+";

// otherwise, if the percentage is 73 or above, letterGrade is C.
}else if (grade >= 73) {
	letterGrade = "C";
	
// otherwise, if the percentage is 70 or above, letterGrade is D.
}else if (grade >= 70) {
	letterGrade = "D";
	
// otherwise, letterGrade is F.
}else{
	letterGrade = "F";
}

// print out the result with a console log.
console.log("You have a " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");

// show an alert of the results
alert("You have a " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");



// Group 3 : Multiple Conditions.
// Tire Pressure I

// declaring the givens as variables
var tirePressure = [];

// declaring a variable to store the results.
var results ;

// get the pressure of the front left tire from the user and store it in the first index of the array.
tirePressure[0] = prompt("Please enter the pressure of the front left tire.");

// get the pressure of the front right tire from the user and store it in the second index of the array.
tirePressure[1] = prompt("Please enter the pressure of the front right tire.");