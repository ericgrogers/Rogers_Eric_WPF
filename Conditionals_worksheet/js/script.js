// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/07/2013
// Conditionals Worksheet

// Last Chance for Gas!

/* A driver has to determine if they can make it across the desert with their current fuel.
They are about to past the last gas station for the next 200 miles and they need to determine
whether they should stop now for gas or not. */

// declaring the givens as variables
var gasEfficiency ;
var gasGauge ;
var tankCapacity ;
var gallonsInTank ;
var totalMiles ;
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
results = (totalMiles > 200) ? "Yes, you can make it without stopping for gas!" : "You only have " + gallonsInTank +
    " gallons of gas in your tank, better get gas now while you can!";


