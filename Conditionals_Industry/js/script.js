// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/09/2013
// Conditionals: Industry

/* This program is a basic billing and payment calculator for the web design/development industry. It will calculate the amount to be billed for 3 different services at different hourly rates, and include an optional maintenance package if the client desires one. It will figure out the retainer fee to be charged, as well as the number of payments and amounts to be paid before final delivery. */

// declaring necessary variables.
var reply;
var visualDesigns = [50, 0]; // Pay per hour, hours to complete
var htmlCssTemplates = [40, 0]; // Pay per hour, hours to complete
var programming = [60, 0]; // Pay per hour, hours to complete
var maintenance1 = [1200, 16, 1]; // Price, 16 hours of service, over 1 month
var maintenance2 = [3000, 24, 3]; // Price, 24 hours of service, over 3 months
var maintenance3 = [5000, 40, 6]; // Price, 40 hours of service, over 6 months
var maintenanceChoice = 0; // package selection
var totalHours; // total working hours
var standardBill; // total of standar services
var totalBill = 0; // total bill with or without maintenance
var retainer; // retainer fee
var onePayment; // for one additional payment
var twoPayments; // for two additional payments
var results; // final results
