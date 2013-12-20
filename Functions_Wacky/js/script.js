// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/18/13
// Functions: Wacky

// How long will Santa Clause need to run on a treadmill to burn off all of the calories from the cookies that the children left for him on Christmas eve?

// add all necessary variables.

var cookieCalories = 59; // set the cookieCalories to 59.
var treadmillSpeed = 2; // set the treadmillSpeed to 2mph.
var caloriesPerMile = 100; // set the caloriesPerMile to 100.
var hoursInDay = 24; // set the hoursInDay to 24.
var results = "Santa will have to run on the treadmill for " + main() + " to burn off all those calories from the children's cookies!";  // set the results to be a brief message and a function call to main.

// create a main function to run the program.

function main(){
    var houses = housesVisited(); // call the housesVisited function and store the results to houses.
    var cookies = cookieAverage(); // call the cookieAverage function and store the results to cookies.
    var calories = calcCalories(houses, cookies, cookieCalories); // call the calcCalories function passing in houses, cookies, and cookieCalories as arguments and storying the results to calories.
    var hoursOnTreadmill = treadmillHours(calories, caloriesPerMile, treadmillSpeed);  // call the treadmillHours function passing in calories, caloriesPerMile, and treadmillSpeed as arguments and store the results in hoursOnTreadmill.
    var totalTime = treadmillTotal(hoursOnTreadmill, hoursInDay); // set totalTime to be the results of a call to the treadmillTotal function passing in hoursOnTreadmill and hoursInDay as arguments.
    return totalTime[0] + " days and " + totalTime[1] + " hours"; // return the first index position of totalTime as days, and the second index position as hours (rounded down).
}

// create a function housesVisited to get the total houses Santa visited.

function housesVisited(){
    var totalHousesNeedsNumber = true; // set totalHousesNeedsNumber to be true.
    var totalHouses = prompt("How many houses did Santa Clause visit on Christmas Eve?"); // ask the user how many houses Santa visited. Store the answer to totalHouses.
    while(totalHousesNeedsNumber){ // while totalHousesNeedsNumber is true,
    // if totalHouses is not a number, prompt the user again for the total houses. Otherwise, set totalHousesNeedsNumber to false.
        (isNaN(totalHouses)) ? totalHouses = prompt("How many houses did Santa Clause visit on Christmas Eve?") : totalHousesNeedsNumber = false;
    }
    return totalHouses; // return the value of totalHouses.
}

// create a function cookieAverage to get the average number of cookies at each house.

function cookieAverage(){
    var cookiesNeedsNumber = true; // set cookiesNeedsNumber to be true.
    var cookies = prompt("What is the average amount of cookies that the children left for Santa at each house?");  // ask the user for the average amount of cookies at each house.
    while(cookiesNeedsNumber){  // while cookiesNeedsNumber is true,
    // if cookies is not a number, ask the user again for the average cookie amount. Otherwise, set cookiesNeedsNumber to be false.
        (isNaN(cookies)) ? cookies = prompt("What is the average amount of cookies that the children left for Santa at each house?") : cookiesNeedsNumber = false;
    }
    return cookies;  // return the value of cookies.

}
