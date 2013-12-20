// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

// Eric Rogers
// 12/18/13
// Functions: Industry

/* This program will calculate the total height of a photo gallery web page, as well as the size of the photos. The user can input the page width, the header height, the footer height, the number of photos to be used, and how many photos per row to display. It will automatically add a 30 pixel padding to the page, and 30 pixels of margin between all elements to keep everything properly aligned. */

// add the necessary variables.

var marginSize = 30; // set the marginSize to 30.
var gutterSize = 30; // set the gutterSize to 30.

// create an anonymous function "main" to run the program.

var main = function(){
    var width = getPageWidth(); // call the getPageWidth function and save the results to width.
    var headFoot = getHeaderFooter(); // call the getHeaderFooter function and save the results to headFoot.
    var pCount = photoCount(); // call the photocount function and save the results to pCount.
    var pRows = photosPerRow(pCount); // call the photosPerRow function passing in the argument pCount and save the results to pRows.
    var pSize = calcPhotoSize(width, pRows, marginSize, gutterSize); // call the calcPhotoSize function passing in width, pRows, marginSize, and gutterSize arguments. Save the results to pSize.
    var height = (calcPageHeight(headFoot, marginSize, pCount, pRows, pSize)); // call the calcPageHeight function passing in headFoot, marginSize, pCount,pRows, and pSize arguments. Save the results to height.
    var results = "A " + width + " x " + height + "px photo gallery page with " + pCount + " photos can be arranged in a " + pRows + " x " + pCount / pRows + " grid    with a photo size of " + pSize + " x " + pSize + "px.\n"; // generate a complete list of the results and save it to results.
    return results; // return the results
};

// create a function to get the page width.

function getPageWidth(){
    var widthNeedsNumber = true; // set widthNeedsNumber to be true.
    var pageWidth = prompt("Please enter the Web Page Width.");  // prompt the user for the page width. save the results to pageWidth.
    while(widthNeedsNumber){ // while widthNeedsNumber is true,
    //check to see if pageWidth is a number, if not, prompt the user again for a page width. Otherwise, set widthNeedsNumber to false and exit the loop.
        (isNaN(pageWidth)) ? pageWidth = prompt("I'm sorry, you have to enter a number. Please enter the Web Page Width.") : widthNeedsNumber = false;
    }
    return pageWidth; // return the pageWidth.

}

// create a function getHeaderFooter to get the header and footer heights.

function getHeaderFooter(){
    var headerFooter = []; // set headerFooter to be an empty array.
    var headerHeight = prompt("Please enter the Header Height."); // prompt the user for a header height and store it in headerHeight.
    var headNeedsNumber = true; // set headNeedsNumber to be true.
    while(headNeedsNumber){ // while headNeedsNumber is true,
        if(isNaN(headerHeight)){ // if headerHeight is not a number,
            headerHeight = prompt("I'm sorry, you have to enter a number. Please enter the Header Height."); // prompt the again for a header height.
        }else{ // otherwise,
            headerFooter.push(headerHeight); // add the headerHeight to the first empty index of the headerFooter array.
            headNeedsNumber = false; // set headNeedsNUmber to false.
        }
    }
    var footerHeight = prompt("Please enter the Footer Height."); // prompt the user for the footer height and store it to footerHeight.
    var footNeedsNumber = true; // set footNeedsNumber to be true.
    while(footNeedsNumber){ // while footNeedsNumber is true,
        if(isNaN(footerHeight)){ // if footerHeight is not a number,
            footerHeight = prompt("I'm sorry, you have to enter a number. Please enter the Footer Height.");  // prompt the user again for a footer height.
        }else{  // otherwise,
            headerFooter.push(footerHeight);  // add footerHeight to the first empty index of the headerFooter array.
            footNeedsNumber = false; // set footNeedsNumber to false.
        }
    }
    return headerFooter; // return the values of headerFooter.
}
