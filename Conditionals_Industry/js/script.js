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

// visual design prompts.

// ask if the client wants visual design services and save the answer to "reply"
reply = prompt('Does the client want Visual Design services? (please type either "yes" or "no")');

// if reply is empty,
if (reply === ""){
	
	// prompt the user a second time, and save the answer to "reply"
    reply = prompt('Please answer the question, does the client want Visual Design services? (please type either "yes" or "no")');
    
    // if reply is still empty,
    if (reply === ""){
    	
    	// save "no" to reply.
        reply = "no";
    }
}

// if reply is exactly equal to "yes",
if (reply === "yes"){

	// ask how many hours will be required and save the answer to the visualDesigns array in the 2nd index position.
    visualDesigns[1] = prompt("How many hours will be required for Visual Designs? (numbers only please)");
    
    // if visualDesigns[1] is empty, or is exactly equal to 0,
    if (visualDesigns[1] === "" || visualDesigns[1] === 0){
    
    	// prompt the user a second time and save the answer to the visualDesigns array in the 2nd index position.
        visualDesigns[1] = prompt("Please answer the question, how many hours will be required for Visual Designs? (cannot be 0)");
        
        // if visualDesigns[1] is still empty, or exactly equal to 0,
        if (visualDesigns[1] === "" || visualDesigns[1] === 0){
        
        	// set visualDesigns[1] to 0;
            visualDesigns[1] = 0;
            
            // save "no" to reply.
            reply = "no";
        
        //otherwise,
        }else{
        
        	// reset reply to "no".
            reply = "no";
        }
    }
}

// html css template prompts

// ask if the client wants HTML/CSS template services and save the answer to "reply".
reply = prompt('Does the client want HTML/CSS Template services? (please type "yes" or "no")');

// if reply is empty,
if (reply === ""){

	// prompt the user a second time and save the answer to reply.
    reply = prompt('Please answer the question, does the client want HTML/CSS Template services? (please type either "yes" or "no")');

	// if reply is still empty,
    if (reply === ""){
    
    	// save "no" to reply.
        reply = "no";
    }
}

// if reply is exactly equal to "yes"
if (reply === "yes"){

	// ask how many hours are required and save the answer to the htmlCssTemplates array in the 2nd index position.
    htmlCssTemplates[1] = prompt("How many hours will be required for the Template services? (numbers only please)");
    
    // if htmlCssTemplates is empty, or is 0,
    if (htmlCssTemplates[1] === "" || htmlCssTemplates[1] === 0){
     
		// prompt the user a second time and save the answer to the htmlCssTemplates array in the 2nd index position.
        htmlCssTemplates[1] = prompt("Please answer the question, how many hours will be required for Template services? (cannot be 0)");

		// if htmlCssTemplates is still empty, or is 0,
        if (htmlCssTemplates[1] === "" || htmlCssTemplates[1] === 0){
        
        	// save 0 to htmCssTemplates[1].
            htmlCssTemplates[1] = 0;
            
            // save "no" to reply.
            reply = "no";
            
        // otherwise,
        }else{
        
        	// reset reply to no.
            reply = "no";
        }
    }
}


