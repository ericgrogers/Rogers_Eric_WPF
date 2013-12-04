// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";



// Eric Rogers
// 12/01/13
// Expressions: Personal

// This is a calculator used to determine how much I spend on coffee per year.

// declaring all variables
var pricePerCup;
var daysPerWeek;
var cupsPerDay;
var weeksPerYear = 52;
var totalCoffee;
var totalPrice;
var results;

// ask the user for the price of a cup of coffee and save it to pricePerCup
pricePerCup = prompt("How much do you pay for a cup of Coffee?");

// ask the user how many days per week coffee is drank and save it to daysPerWeek
daysPerWeek = prompt("How many days per week do you drink Coffee?");

// ask the user how many cups of coffee is drank per day and save it to cupsPerDay
cupsPerDay = prompt("When you do drink Coffee, how many cups of Coffee do you drink per day?");

// total the amount of coffee drank by multiplying daysPerWeek by weeksPerYear and then cupsPerDay
totalCoffee = Number(daysPerWeek) * weeksPerYear * Number(cupsPerDay);

// multiplying pricePerCup by totalCoffee to get the totalPrice
totalPrice = Number(pricePerCup) * Number(totalCoffee);

// adding all results together using concatenation and variables to create a full summary.
results = "At $" + pricePerCup + " per cup of Coffee, if I drink " + cupsPerDay + " cups per day, " + daysPerWeek + " days per week, it will cost me $" + totalPrice + " per year.";

// create an alert to show the results
alert(results);

// output all results to the console. This is concatenating strings and variables together to display text along with the data stored in the variables.
console.log(results);