// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/14/2013
// Functions Worksheet

// Circumference
// calculate the circumference of a circle using the radius.  ( c=2πr)

// create an anonymous function


var calcCircumference = function(p, r){
    return 2 * p * r;
};

// declare the necessary variables.

var radius = 10;
var pie = Math.PI;
var circumference = calcCircumference(pie, radius);
var results = "The circumference of the circle is " + circumference;



console.log(results);

