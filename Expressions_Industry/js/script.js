// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/02/13
// Expressions: Industry-Specific

/* This program can be used to fill out a simple weekly paycheck and paystub. It will print out the company name of the check issuer, the employee that is receiving the check, the date, and the amount being paid on the check portion. The paystub portion will show the company's name, the employee's name, the date, the number of hours of normal pay, the number of hours of overtime pay, the amount paid for normal hours, the amount paid for overtime hours, total hours, and a total pay. This program does not include deductions or taxes. The program will allow you to input hours and overtime hours on a day by day basis for a 5 day work week. It will also show a running total of hours to the user through day 5. */

// declaring all variables here.
var totalNormalHours = 0;
var totalOvertimeHours = 0;
var date;
var companyName;
var employee;
var hourlyRate;
var overtimeRate;
var normalHoursMon;
var overtimeHoursMon;
var normalHoursTue;
var overtimeHoursTue;
var normalHoursWed;
var overtimeHoursWed;
var normalHoursThur;
var overtimeHoursThur;
var normalHoursFri;
var overtimeHoursFri;
var normalPayTotal;
var overtimePayTotal;
var totalPay;
var totalHours;
var check;
var checkStub;
var result;

// prompting the user for the date and saving it to the date variable.
date = prompt("Please enter the date in the following format: \nMM/DD/YYYY");

// getting the company's name from the user by using a prompt
companyName = prompt("Please enter the Company name to be printed on the check.");

// getting the name of the employee to receive the paycheck by using a prompt
employee = prompt("Please enter the name of the Employee to be printed on the check.");

// getting the hourly rate to be paid to the employee by using a prompt
hourlyRate = prompt("Please enter the normal hourly rate paid to the employee. (Please use numbers only.)");

// getting the overtime rate to be paid to the employee by using a prompt
overtimeRate = prompt("Please enter the overtime rate paid to the employee. (Please use numbers only.)");

// prompt the user to enter the amount of normal hours worked on Monday and save it to normalHoursMon
normalHoursMon = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Monday.");

// adjusting the total of normal hours by adding monday's hours to the previous total.
totalNormalHours += Number(normalHoursMon);

// prompt the user to enter the amount of overtime hours worked on Monday and save it to overtimeHoursMon
overtimeHoursMon = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Monday.");


// adjusting the total of overtime hours by adding monday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursMon);

//prompt the user to enter the amount of normal hours worked on Tuesday and save it to normalHoursTue. Include the running total of normal and overtime hours in the prompt.
normalHoursTue = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Tuesday.");

// adjusting the total of normal hours by adding tuesday's hours to the previous total.
totalNormalHours += Number(normalHoursTue);

//prompt the user to enter the amount of overtime hours worked on Tuesday and save it to overtimeHoursTue. Include the running total of normal and overtime hours in the prompt.
overtimeHoursTue = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Tuesday.");

// adjusting the total of overtime hours by adding tuesday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursTue);

//prompt the user to enter the amount of normal hours worked on wednesday and save it to normalHoursWed. Include the running total of normal and overtime hours in the prompt.
normalHoursWed = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Wednesday.");

// adjusting the total of normal hours by adding wednesday's hours to the previous total.
totalNormalHours += Number(normalHoursWed);

//prompt the user to enter the amount of overtime hours worked on wednesday and save it to overtimeHoursWed. Include the running total of normal and overtime hours in the prompt.
overtimeHoursWed = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Wednesday.");

// adjusting the total of overtime hours by adding wednesday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursWed);

//prompt the user to enter the amount of normal hours worked on thursday and save it to normalHoursThur. Include the running total of normal and overtime hours in the prompt.
normalHoursThur = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Thursday.");

// adjusting the total of normal hours by adding thursday's hours to the previous total.
totalNormalHours += Number(normalHoursThur);

//prompt the user to enter the amount of overtime hours worked on thrusday and save it to overtimeHoursThur. Include the running total of normal and overtime hours in the prompt.
overtimeHoursThur = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Thursday.");

// adjusting the total of overtime hours by adding thursday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursThur);

//prompt the user to enter the amount of normal hours worked on friday and save it to normalHoursFri. Include the running total of normal and overtime hours in the prompt.
normalHoursFri = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Friday.");

// adjusting the total of normal hours by adding friday's hours to the previous total.
totalNormalHours += Number(normalHoursFri);

//prompt the user to enter the amount of overtime hours worked on friday and save it to overtimeHoursFri. Include the running total of normal and overtime hours in the prompt.
overtimeHoursFri = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Friday.");

// adjusting the total of overtime hours by adding friday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursFri);

// multiply totalNormalHours by hourlyRate to get the total of normal pay (normalPayTotal).
normalPayTotal = Number(totalNormalHours) * Number(hourlyRate);

// multiply totalOvertimeHours by overtimeRate to get the total of overtime pay (overtimePayTotal).
overtimePayTotal = Number(totalOvertimeHours) * Number(overtimeRate);

// add normalPayTotal to overtimePayTotal to get the totalPay.
totalPay = Number(normalPayTotal) + Number(overtimePayTotal);

// add totalNormalHours to totalOvertimeHours to create the totalHours variable.
totalHours = Number(totalNormalHours) + Number(totalOvertimeHours);

// creating the check by saving the company's name, the employee's name, and total pay to the check variable.
check = "Check to be printed: \n \nCompany Name: " + companyName + "     Date: " + date + "\n \nPay to the order of: " + employee + ", Amount: $" + totalPay;

// creating the check stub by saving the company's name, the employees name, the total normal hours worked, the total overtime hours worked, the total normal pay, the total overtime pay, and the total pay to the checkStub variable.
checkStub = "\n \nCheck Stub to be printed: \n \nCompany Name: " + companyName + "\nEmployee Name: " + employee + "     Date: " + date + "\n \nNormal Hours: " + totalNormalHours + "     Normal Wages: $" + normalPayTotal + "\n \nOvertime Hours: " + totalOvertimeHours + "     Overtime Wages: $" + overtimePayTotal + "\n \nTotal Hours: " + totalHours + "     Total Wages: $" + totalPay;

// creating a result variable to hold the check and checkStub.
result = check + checkStub;

// creating an alert to show all results
alert(result);

// outputting the result to the console.
console.log(result);

