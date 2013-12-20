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
