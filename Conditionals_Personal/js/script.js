// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/08/2013
// Conditionals: Personal

/* This program determines how long a person would have to save for a vacation. It factors your bills, your income, and the price of the vacation to determine how many months it will take to get enough money together. */

// declaring all of the necessary variables.
var monthlySalary;
var monthlySpending;
var monthlyExtraMoney;
var electric;
var water;
var home;
var phone;
var insurance;
var vacationPrice;
var spendingMoney;
var monthsToSave;
var results;

// ask the user for the price of the vacation package with a prompt and save it to the vacationPrice variable.
vacationPrice = prompt("What is the price of the vacation package?");

// if the vacationPrice variable is empty, prompt the user again.
if (vacationPrice === ""){
	vacationPrice = prompt("I'm sorry, you must enter a number. \nWhat is the price of the vacation package?");

// otherwise, continue.
}else{

	// ask the user for their monthly salary with a prompt and save it to the monthlySalary variable.
	monthlySalary = prompt("Please enter your monthly salary (after deductions)");
	
	//if the monthlySalary variable is empty, prompt the user again.
	if (monthlySalary === ""){
		monthlySalary = prompt("I'm sorry, you must enter a number. \nPlease enter your monthly salary (after deductions)");
	
	// otherwise, continue.
	}else{
	
		// ask the user how much spending money they will need and save it to the spendingMoney variable.
		spendingMoney = prompt("How much spending money will you need on the vacation?");
		
		// if the spendingMoney variable is empty, prompt the user again.
		if (spendingMoney === ""){
			spendingMoney = prompt("I'm sorry, you must enter a number. \nHow much spending money will you need on the vacation?");
			
		// otherwise, continue.
		}else{
			
			// Start of the Bills section.
			// ask user how much they pay for electric with a prompt and save it to the electric variable.
			electric = prompt("How much do you pay monthly for electric?");
			
			// if the electric variable is empty, prompt the user again.
			if (electric === ""){
				electric = prompt("I'm sorry, you must enter a number. \nHow much do you pay monthly for electric?");
				
			// otherwise, continue.
			}else{
				
				// ask user how much they pay for water and save it to the water variable.
				water = prompt("How much do you pay monthly for water?");
				
				// if the water variable is empty, prompt the user again.
				if (water === ""){
					water = prompt("I'm sorry, you must enter a number. \nHow much do you pay monthly for water?");
				
				// otherwise, continue.
				}else{
					
					// ask the user how much they pay for their home and save it to the home variable.
					home = prompt("How much do you pay monthly for your home? (rent or mortgage)");
					
					// if the home variable is empty, prompt the user again.
					if (home === ""){
						home = prompt("I'm sorry, you must enter a number. \nHow much do you pay monthly for your home? (rent or mortgage)");
					
					// otherwise, continue.	
					}else
				}
			}
		}
	}
}