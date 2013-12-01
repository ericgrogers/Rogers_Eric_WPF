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

/* Calculating the total number of slices by first multiplying the total number
of pizzas by the total number of slices in each pizza. Then, divide the total number of slices
by the number of people to arrive at the result. */
var slicesPerPerson = pizzas * slices / people;

// Output the results
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.")

