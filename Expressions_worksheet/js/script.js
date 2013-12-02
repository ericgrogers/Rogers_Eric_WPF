// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/01/13
// Expressions Worksheet

// Dog Years

// Calculate how old Sparky the pit bull is in dog years based on his actual age.

// setting Sparky's age
var sparkyAge = 5;

// Multiplying Sparky's age by 7 to determine his age in dog years.
var dogYears = sparkyAge * 7;

// Print out sparky's human age, as well as his age in dog years.
console.log("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years.")




// Slice of Pie part 1

// Determine how many slices of pizza each person will get.

// setting the number of slices per pizza.
var slices = 8.195;

// setting the number of people at the party.
var people = 27;

// setting the number of pizzas ordered.
var pizzas = 5;

// multiply pizzas and slices, then divide by people to get the slices per person.
var slicesPerPerson = pizzas * slices / people;

// Output the results of slices per person.
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.")



// Slice of Pie part II

// multiply pizzas by slices then divide by people, using modulo to show the remainder.
var sparkySlices = pizzas * slices % people;

// Output the results to show how many slices Sparky ate.
console.log("Sparky got " + sparkySlices + " slices of pizza.")



// Average Shopping Bill

// Calculate the average amount spent on groceries over a 5 week period.

// setting the past five grocery totals.
var weeklyTotals = [100, 75, 80, 45, 90];

// getting the total amount spent by adding the weekly totals.
var totalAmountSpent = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4];

// getting the average weekly amount spent by dividing the total amount spent by 5.
var weeklyAverage = totalAmountSpent / 5;

// output the results of the total amount spent and the weekly average.
console.log("You have spent a total of $" + totalAmountSpent + " on groceries over 5 weeks. That is an average of $" + weeklyAverage + " per week");



// Discounts

// Calculate discounted price with and without sales tax.

// setting original price
var originalPrice = 75;

// setting discount percentage
var percentDiscount = 15;

// setting item description
var item = "dress shoes";

// setting sales tax percentage
var salesTax = 5;

// calculating price of item without tax. Subtract the originalPrice from the originalPrice multiplied by the percentDiscount divided by 100.
var itemNoTax = originalPrice - originalPrice * percentDiscount / 100;

// calculating price of item with tax. Add the itemNotax to the salesTax multiplied by itemNoTax divided by 100.
var itemWithTax = itemNoTax + salesTax * itemNoTax / 100;

// output the results
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + percentDiscount + "% discount, it is now $" + itemNoTax + " without tax, and $" + itemWithTax + " with tax.");