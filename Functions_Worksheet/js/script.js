// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/14/2013
// Functions Worksheet

// Circumference
// calculate the circumference of a circle using the radius.  ( c=2πr)

// create an anonymous function

// set calcCircumference to be an anonymous function that takes the parameters p and r.
var calcCircumference = function(p, r){
    
    // multiply 2 times p times r and return the results to the function call.
    return 2 * p * r;
};

// declare the necessary variables.

var radius = 10; // set the radius to 10

var pie = Math.PI; // set pie to Math.PI which is literally 3.141592653589793.

var circumference = calcCircumference(pie, radius);  // call the function calcCircumference. Pass in pie and radius as the arguments, then save the returned results to circumference.

var results = "The circumference of the circle is " + circumference;  // setting the results with a brief message and including the circumference.

console.log(results); // print the results to the console.


//Stung
// It takes 8.666666667 bee stings per pound to kill an animal.
// Calculate how many bee stings are needed to kill an animal.

// declare the necessary variables

var stingsPerPound = 8.666666667; // setting the stings needed per pound.

var victimWeight = 200; // setting the victim's weight.

var totalStings = calcStings(stingsPerPound, victimWeight); // call the calcStings function. Pass the variables stingsPerPound and victimWeight as the arguments, then save the returned output as totalStings.

results = "It takes " + totalStings + " bee stings to kill this animal."; // setting the results with a brief message and including the totalStings.

// declare and define the function

// create the function calcStings and give it the parameters of stng and lbs.
function calcStings(stng, lbs){

	// multiply stng by lbs and return the results to the function call.
    return stng * lbs;
}

console.log(results); // print the results to the console.
