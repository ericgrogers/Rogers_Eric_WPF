// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


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

// calculating the number of slices each person will get.
var slicesPerPerson = pizzas * slices / people;

// Output the results
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.")



// Slice of Pie part II

// setting number of slices Sparky will get.
var sparkySlices = pizzas * slices % people;

// Output the results.
console.log("Sparky got " + sparkySlices + " slices of pizza.")



// Average Shopping Bill

// Calculate the average amount spent on groceries over a 5 week period.

// setting the past five grocery totals.
var weeklyTotals = [100, 75, 80, 45, 90];

// getting the total amount spent.
var totalAmountSpent = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4];

// getting the average weekly amount spent.
var weeklyAverage = totalAmountSpent / 5;

// output the results
console.log("You have spent a total of $" + totalAmountSpent + " on groceries over 5 weeks. That is an average of $" + weeklyAverage + " per week");



