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

// ask if the client wants visual design services with a prompt and save the answer to "reply"
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

// ask if the client wants HTML/CSS template services with a prompt and save the answer to "reply".
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

// programming prompts

// ask if client wants programming services with a prompt and save the answer to reply.
reply = prompt('Does the client want Programming services? (please type "yes" or "no")');

// if reply is empty,
if (reply === ""){

	// prompt the user a second time.
    reply = prompt('Please answer the question, does the client want Programming services? (please type either "yes" or "no")');
    
    // if repy is still empty,
    if (reply === ""){
    
    	// save "no" to reply.
        reply = "no";
    }
}

// if repy is yes,
if (reply === "yes"){

	// ask the user how many hours are required with a prompt and save the answer to the programming array at index position 1.
    programming[1] = prompt("How many hours will be required for the Programming services? (numbers only please)");
    
    // if the second index of programming is empty, or if the second index of programming is 0,
    if (programming[1] === "" || programming[1] === 0){
    
    	// prompt the user a second time and save the answer to programming.
        programming[1] = prompt("Please answer the question, how many hours will be required for Programming services? (cannot be 0)");

		// if the second index of programming is empty, or if the second index of programming is 0,
        if (programming[1] === "" || programming[1] === 0){
        
        	// the second index of programming is 0
            programming[1] = 0;
            
            // save "no" to reply.
            reply = "no";
            
        //otherwise,
        }else{
        
        	// reset reply to no.
            reply = "no";
        }
    }
}

// maintenance packages

// ask if the client will require a maintenance package and save the answer to reply.
reply = prompt('Will the client require a Maintenance Package? (please type "yes" o "no")');

// if reply is empty,
if (reply === ""){

	// prompt the user a second time and save the answer to reply.
    reply = prompt('Please answer the question, will the client require a Maintenance Package? (please type "yes" or "no")');

	// if reply is still empty,
    if (reply === ""){

		// save "no" to reply.
        reply = "no";
    }
}

// if reply is yes,
if (reply === "yes"){

	// prompt the user and explain the 3 packages, then save their choice to maintenanceChoice.
    maintenanceChoice = prompt("Package 1: $" + maintenance1[0] + " for " + maintenance1[1] + " hours of service that expire after " + maintenance1[2] + " month. \n\nPackage 2: $" + maintenance2[0] + " for " + maintenance2[1] + " hours of service that expire after " + maintenance2[2] + " months. \n\nPackage 3: $" + maintenance3[0] + " for " + maintenance3[1] + " hours of service that expire after " + maintenance3[2] + " months. \n\nPlease make your selection by typing either 1, 2, or 3.");

	// if maintenanceChoice is empty,
    if (maintenanceChoice === ""){
    
    	// prompt the user again and save the answer to maintenanceChoice.
        maintenanceChoice = prompt("Please answer the question, \n\nPackage 1: $" + maintenance1[0] + " for " + maintenance1[1] + " hours of service that expire after " + maintenance1[2] + " month. \n\nPackage 2: $" + maintenance2[0] + " for " + maintenance2[1] + " hours of service that expire after " + maintenance2[2] + " months. \n\nPackage 3: $" + maintenance3[0] + " for " + maintenance3[1] + " hours of service that expire after " + maintenance3[2] + " months. \n\nPlease make your selection by typing either 1, 2, or 3.");

		// if maintenanceChoice is not 1, 2, or 3,
        if (maintenanceChoice != "1" || maintenanceChoice != "2" || maintenanceChoice != "3"){
            
            // set maintenanceChoice to 0.
            maintenanceChoice = 0;
        }
    }
}

// calculate the total hours

// add up the hours required for visua design, html/css templates, and programming, then save the result to totalHours.
totalHours = Number(visualDesigns[1]) + Number(htmlCssTemplates[1]) + Number(programming[1]);

// calculate total bill

// multiply the pay per hour, by the hours required for visualDesigns, htmlCssTemplates, and programming. Then, add the totals and save the result to standardBill.
standardBill = Number(visualDesigns[0] * visualDesigns[1]) + Number(htmlCssTemplates[0] * htmlCssTemplates[1]) + Number(programming[0] * programming[1]);

// if maintenaceChoice is 1,
if (maintenanceChoice === "1"){

	// add standardBill to the price of maintenance1 and save it to totalBill.
    totalBill = standardBill + Number(maintenance1[0]);
// otherwise if maintenanceChoice is 2,
}else if (maintenanceChoice === "2"){

	// add standardBill to the price of maintenance2 and save it to totalBill.
    totalBill = standardBill + Number(maintenance2[0]);
    
// otherwise if maintenanceChoice is 3,
}else if (maintenanceChoice === "3"){

	// add standardBill to the price of maintenance3 and save it to totalBill.
    totalBill = standardBill + Number(maintenance3[0]);
    
// otherwise,
}else{

	// add totalBill to totalBill and standardBill.
    totalBill += standardBill;
}

// calculate retainer

// divide totalBill by 2 and save it to retainer.
retainer = totalBill / 2;

// calculate payments

// divide totalBill by 2 and save it to onePayment.
onePayment = totalBill / 2;

// divide totalBill by 4 and save it to twoPayments.
twoPayments = totalBill / 4;




