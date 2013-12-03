// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/02/13
// Expressions: Industry-Specific

/* This program can be used to fill out a simple weekly paycheck and paystub. It will print out the company name of the check issuer, the employee that is receiving the check, and the amount being paid on the check portion. The paystub portion will show the company's name, the employee's name, the number of hours of normal pay, the number of hours of overtime pay, the amount paid for normal hours, the amount paid for overtime hours, and a total pay. This program does not include deductions or taxes. The program will allow you to input hours and overtime hours on a day by day basis for a 5 day work week. It will also show a running total of hours to the user through day 5. */

// creating a variable to store the total amount of normal hours worked. Setting the starting total to 0.
var totalNormalHours = 0;

// creating a variable to store the total amount of overtime hours worked. Setting the starting total to 0.
var totalOvertimeHours = 0;

// getting the company's name from the user by using a prompt
var companyName = prompt("Please enter the Company name to be printed on the check.");

// getting the name of the employee to receive the paycheck by using a prompt
var employee = prompt("Please enter the name of the Employee to be printed on the check.");

// getting the hourly rate to be paid to the employee by using a prompt
var hourlyRate = prompt("Please enter the normal hourly rate paid to the employee.");

// getting the overtime rate to be paid to the employee by using a prompt
var overtimeRate = prompt("Please enter the overtime rate paid to the employee.");

// prompt the user to enter the amount of normal hours worked on Monday and save it to normalHoursMon
var normalHoursMon = prompt("Please enter the number of Normal Hours worked on Monday.");

// prompt the user to enter the amount of overtime hours worked on Monday and save it to overtimeHoursMon
var overtimeHoursMon = prompt("Please enter the number of Overtime Hours worked on Monday.");

// adjusting the total of normal hours by adding monday's hours to the previous total.
totalNormalHours += Number(normalHoursMon);

// adjusting the total of overtime hours by adding monday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursMon);

//prompt the user to enter the amount of normal hours worked on Tuesday and save it to normalHoursTue. Include the running total of normal and overtime hours in the prompt.
var normalHoursTue = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Tuesday.");

// adjusting the total of normal hours by adding tuesday's hours to the previous total.
totalNormalHours += Number(normalHoursTue);

//prompt the user to enter the amount of overtime hours worked on Tuesday and save it to overtimeHoursTue. Include the running total of normal and overtime hours in the prompt.
var overtimeHoursTue = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Tuesday.");

// adjusting the total of overtime hours by adding tuesday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursTue);

//prompt the user to enter the amount of normal hours worked on wednesday and save it to normalHoursWed. Include the running total of normal and overtime hours in the prompt.
var normalHoursWed = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Wednesday.");

// adjusting the total of normal hours by adding wednesday's hours to the previous total.
totalNormalHours += Number(normalHoursWed);

//prompt the user to enter the amount of overtime hours worked on wednesday and save it to overtimeHoursWed. Include the running total of normal and overtime hours in the prompt.
var overtimeHoursWed = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Wednesday.");

// adjusting the total of overtime hours by adding wednesday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursWed);

//prompt the user to enter the amount of normal hours worked on thursday and save it to normalHoursThur. Include the running total of normal and overtime hours in the prompt.
var normalHoursThur = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Normal Hours worked on Thursday.");

// adjusting the total of normal hours by adding thursday's hours to the previous total.
totalNormalHours += Number(normalHoursThur);

//prompt the user to enter the amount of overtime hours worked on thrusday and save it to overtimeHoursThur. Include the running total of normal and overtime hours in the prompt.
var overtimeHoursThur = prompt("Total Normal Hours: " + totalNormalHours + "\nTotal Overtime Hours: " + totalOvertimeHours + "\nPlease enter the number of Overtime Hours worked on Thursday.");

// adjusting the total of overtime hours by adding thursday's hours to the previous total.
totalOvertimeHours += Number(overtimeHoursThur);

