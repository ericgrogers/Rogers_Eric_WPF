// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/18/13
// Funcitons: Personal

// This program is used to create a playlist of mp3's and sort them alphabetically.


// add the necessary variables


var mp3s = []; // set an array to store the list of mp3's
var results; // set a variable to hold the final results.
var playlistName; // set a variable to hold the playlist name.

// create the main function to run the program.

function main(){
    playlistName = getName(); // call the getName function and save the results to playlistName.
    addMp3(); // call the addMp3 function.
}

// create a function to get the playlist name.

function getName(){
    var plName = prompt("Please enter a name for your playlist"); // prompt the user for a playlist name and store it to plName.
    while(plName === ""){ // while plName is empty.
        plName = prompt("You must enter a name. Please enter a name for your playlist."); // continue to prompt the user for a playlist name.
    }
    return plName;  // return the playlist name
}

// create a function to find out if the user wants to add a new mp3.

function addMp3(){
    var add = prompt("Would you like to enter a new MP3 into your playlist?").toLowerCase(); // ask the user with a prompt if they want to add a new mp3. Store their response in the variable add in all lowercase letters.
    while(add != "yes" && add != "no"){ // while add is not yes and it's not no, 
        add = prompt("You must answer Yes or No. Would you like to enter a new MP3 into your playlist?").toLowerCase(); // prompt the user again for an answer of yes or no.
    }
    if(add === "yes"){ // if add is exactly equal to "yes",
        getMp3Name(); // call the getMp3Name function.
    }else{ // otherwise,
    checkForEmpty(); // call the checkForEmpty function.
    }
}

// create a function to check to see if there is an mp3 on the list.

function checkForEmpty(){
    if(mp3s.length <= 0){ // if the length of mp3s is less than or equal to 0,
        addMp3(); // call the addMp3 function.
    }else{ // otherwise,
        generateList(playlistName, mp3s); // call the generateList function, passing in playlistName and mp3s as arguments.
    }
}

