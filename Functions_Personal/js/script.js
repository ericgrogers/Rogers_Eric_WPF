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

// create a function to get the name of the mp3 to be added.

function getMp3Name(){
    var name = prompt("Please enter the name of the MP3."); // prompt the user to enter an mp3 name and store it in name.
    while(name === ""){ // while the name variable is empty,
        name = prompt("You have to give it a name. Please enter the name of the MP3.");  // prompt the user again for an mp3 name.
    }
    var isSure = prompt("Is this the correct name: " + name + "?"); // ask the user if they entered the correct name. Store their answer in isSure.
    while(isSure != "yes" && isSure != "no"){ // while isSure is not yes and not no,
        isSure = prompt("You have to answer Yes or No. Is this the correct name: " + name + "?"); // prompt the user again and ask if they entered the correct name.
    }
    if(isSure.toLowerCase() === "no"){  // if the user entered no to isSure,
        getMp3Name(); // call the getMp3Name function again.
    }else{ // otherwise,
        mp3s.push(name.toLowerCase()); // add the value of name in lowercase letters to the mp3s array at the next empty index position.
        mp3s.sort(); // sort the mp3s alphabetically.
        addMp3(); // call the addMp3 function.
    }
}

// create a function to generate the playlist

function generateList(playlist, music){ // generateList has the parameters playlist music.
    var count = 1; // set a counter to 1.
    var list = ""; // create an empty string variable named list
    var description = "You have " + music.length + " mp3's in your " + playlist +" playlist.\n\n"; // set the description variable to include the number of mp3's and playlist name.
    for(i=0; i < music.length; i++){ // set i to 0, while i is less than the length of the music variable(mp3s), add 1 to i.
        list += count + ". " +music[i] +"\n"; // list equals list plus list plus the value of count pluse the value of music at the current index position. add a new line after.
        count ++; // increment count by 1.
    }
    results = description + list; // set results to be description plus list.
}
