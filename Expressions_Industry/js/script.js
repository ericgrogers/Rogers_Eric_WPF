// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/02/13
// Expressions: Industry-Specific

/* This program can be used to fill out a simple weekly paycheck and paystub. It will print out the company name of the check issuer, the employee that is receiving the check, and the amount being paid on the check portion. The paystub portion will show the company's name, the employee's name, the number of hours of normal pay, the number of hours of overtime pay, the amount paid for normal hours, the amount paid for overtime hours, and a total pay. This program does not include deductions or taxes. The program will allow you to input hours and overtime hours on a day by day basis for a 5 day work week. It will also show a running total through day 5. */

// getting the company's name from the user by using a prompt
var companyName = prompt("Please enter the Company name to be printed on the check.");

// getting the name of the employee to receive the paycheck
var employee = prompt("Please enter the name of the Employee to be printed on the check.");

