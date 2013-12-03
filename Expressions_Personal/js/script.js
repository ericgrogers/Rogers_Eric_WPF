// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";



// Eric Rogers
// 12/01/13
// Expressions: Personal

// How much do I spend on coffee per year.

// ask the user for the price of a cup of coffee and save it to pricePerCup
var pricePerCup = prompt("How much do you pay for a cup of Coffee?");

// ask the user how many days per week coffee is drank and save it to daysPerWeek
var daysPerWeek = prompt("How many days per week do you drink Coffee?");

// ask the user how many cups of coffee is drank per day and save it to cupsPerDay
var cupsPerDay = prompt("When you do drink Coffee, how many cups of Coffee do you drink per day?");

// setting the weeks per year
var weeksPerYear = 52;

// total the amount of coffee drank by multiplying daysPerWeek by weeksPerYear and then cupsPerDay
var totalCoffee = Number(daysPerWeek) * weeksPerYear * Number(cupsPerDay);

// multiplying pricePerCup by totalCoffee to get the totalPrice
var totalPrice = Number(pricePerCup) * Number(totalCoffee);

// adding all results together using concatenation and variables to create a full summary.
var results = "At $" + pricePerCup + " per cup of Coffee, if I drink " + cupsPerDay + " cups per day, " + daysPerWeek + " days per week, it will cost me $" + totalPrice + " per year.";

// output all results to the console. This is concatenating strings and variables together to display text along with the data stored in the variables.
console.log(results);