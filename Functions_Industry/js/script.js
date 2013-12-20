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

// create a function to get the amount of photos to be added to the gallery.

function photoCount(){
    var photos = prompt("Please enter the amount of Photos you want to add to the page.(Must be an even number.)");  // prompt the user to input the amount of photos to use in even numbers only.
    var photosNeedsNumber = true; // set photosNeedsNumber to be true.
    while(photosNeedsNumber){  // while photosNeedsNumber is true,
    // if photos is not a number or the remainder of dividing photos by 2 is not equal to 0, prompt the user again for the photo count. Otherwise, set photosNeedsNumber to false.
        (isNaN(photos) || photos % 2 != 0) ? photos = prompt("I'm sorry, you have to enter an even number. How many Photos do you want to add to the page?") : photosNeedsNumber = false;
    }
    return photos; // return the value of photos.
}

// create a function photosPerRow to get the number of photos that will be used in each row of the gallery.

function photosPerRow(photoCount){
    var photoRows = prompt("How many photos will be in a row?"); // prompt the user for the number of photos per row and store it in photoRows.
    var photoRowsNeedsNumber = true; // set photoRowsNeedsNumber to be true.
    while(photoRowsNeedsNumber){  // while photoRowsNeedsNumber is true,
    //if photoRows is not a number, prompt the user again for a photo per row count. Otherwise if the remainder of photoCOunt divided by photoRows is not equal to 0, prompt the user again for a photos per row count. Otherwise, set photoRowsNeedsNumber to be false.
        (isNaN(photoRows)) ? photoRows = prompt("I'm sorry, you must enter a number. How many photos will be in a row?") : (photoCount % photoRows != 0) ? photoRows = prompt("I'm sorry, there must be an equal amount of photos in each row. How many photos will be in a row?") : photoRowsNeedsNumber = false;
    }
    return photoRows;  // return the value of photoRows.
}

// create a function calcPhotoSize that takes the parameters pageWidth, photoRows, marginSize, and gutterSize to calculate the size of the photos for the gallery.
function calcPhotoSize(pageWidth, photoRows, marginSize, gutterSize){
    var availablePageWidth = pageWidth  - marginSize * 2; // set the availablePageWidth to be the pageWidth minuse the marginSize times 2.
    var horizontalGutters = photoRows - 1; // set the horizontalGUtters to be the photoRows minus 1.
    var photoSize = (availablePageWidth - horizontalGutters * gutterSize) / photoRows; // set the photoSize to be availablePageWidth minus horizontalGutters times guttersize divided by photoRows.
    return photoSize;  // return the value of photoSize.
}


// create a function calcPageHeight with the parameters headerFooter, marginSize, photoCount, photoRows, and photoSize to calculate the total page height.
function calcPageHeight(headerFooter, marginSize, photoCount, photoRows, photoSize){
    var columns = photoCount / photoRows; // set the columns to be photoCount / photoRows.
    var verticalGutters = columns -1; // set the verticalGutters to be columns minus 1.
    var totalPageHeight = marginSize * 4 + Number(headerFooter[0]) + Number(headerFooter[1]) + columns * photoSize + verticalGutters * marginSize; // set totalPageHeight to be marginSize * 4 plus the first index position of headerFooter plus the second index position of headerFooter plus columns times photoSize plus verticalGutters * marginSize.
    return totalPageHeight;  // return the value of totalPageHeight.
}

console.log(main()); // print to the console the results by calling the main function to run the program.

