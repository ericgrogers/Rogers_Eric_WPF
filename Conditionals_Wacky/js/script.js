// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


// Eric Rogers
// 12/11/2013
// Conditionals: Wacky

/* For this program, the user is going to have a snowball fight with Frosty the Snowman. The program asks the user for their name, and then asks if they would like to see the rules for the game. When the game starts, the computer generates a random number between 1 and 5 and then asks the user to guess at the number. If the user get it right, it records a hit, otherwise, the user misses and then the computer takes a turn. The computer will make a random guess and then it goes back to the user. Both the user and Frosty will guess 3 times, and then the hits will be totaled. Then it will declare a winner, or a tie will occur.*/

// set up the variables

var userName; // hold the user's name
var frostyGuess = Math.floor(Math.random() * 5 + 1); // generates a random guess for Frosty.
var hit; // random number that the user and Frosty will try to guess.
var userGuess; // the user's guess.
var yesOrNo; // stores the user's "yes" or "no" choice.
var totalUserHits = 0; // stores the user's hit count.
var totalFrostyHits = 0; // stores Frosty's hit count.
var results; // stores the final results.
var rules = "You and Frosty are going to take turns throwing snowballs. You will guess a number from 1 to 5 and try to hit Frosty more times than he hits you! You only have 3 snowballs, so make them count!"; // stores the rules for the game.

// get the user's name

// prompt the user for their name and save it to userName.
userName = prompt("Please enter your Name.");

// if the userName is empty,
if(userName === ""){

	// prompt the user again and save the answer to userName.
    userName = prompt("Don't you want to be famous? Enter your Name.");

	// if the userName is still empty,
    if(userName === ""){

		// set userName to "Skeerdy Cat".
        userName = "Skeerdy Cat";

		// print a taunt to Skeerdy Cat in the console.
        console.log("That's O.K. " + userName + ", you don't have to enter a name. :-P");
    }
}

// Rules?

// ask the user if they would like to see the rules, save their answer to yesOrNo.
yesOrNo = prompt('We are going to have a Snowball Fight! \n\nWould you like to see the rules? (please type "yes" or "no"').toLowerCase();

// if yesOrNo is empty,
if(yesOrNo === ""){

	// ask the user again, do they want to see the rules, and save it to yesOrNo.
    yesOrNo = prompt("What did you say? You want the rules or not? (yes/no)");

	// if yesOrNo is still empty,
    if(yesOrNo === ""){

		// print a confirmation message to the console and continue.
        console.log("Alrighty then. Let's go " + userName + "!!!");
    }

// otherwise, if yesOrNo is exactly equal to "no",
}else if(yesOrNo === "no"){

	// print a confirmation message to the console.
    console.log("You've played this before " + userName + ", I can tell!");

// otherwise, if yesOrNo is exactly equal to "yes",
}else if(yesOrNo === "yes"){

	// print a confirmation message to the console.
    console.log("Here you go " +userName+ ".\n\n" + rules);
}

// set hit

// generate a random number between 1 and 5, save it to hit.
hit = Math.floor(Math.random() * 5 + 1);


// user first guess

// prompt the user to make a guess and save it to userGuess.
userGuess = prompt("You go first " + userName + "! Make your first guess.");

// if userGuess is empty,
if(userGuess === ""){

	// prompt the user again and save the answer to userGuess.
    userGuess= prompt("You gotta guess a number to throw your snowball! What's it gonna be?");

	// if userGuess is still empty,
    if(userGuess === ""){

		// print to the console tha they are too slow.
        console.log("You're too slow!\n");
    }

// otherwise, if the userGuess is greater than hit,
}else if(userGuess > hit){

	// print to the console that the user threw it too high.
    console.log("Wowza! You threw that one over his head!");

// otherwise, if userGuess is less than hit,
}else if(userGuess < hit){

	// print to the console that the user threw it too low.
    console.log("Looks like you need to eat your Wheaties! You threw that one too low!");

// otherwise,
}else{

	// print to the console a hit confirmation message.
    console.log("Great shot " + userName + "! You got a hit!");

	// increment the totalUserHits by 1.
    totalUserHits ++;

	// generate a new random number and save it to hit.
    hit = Math.floor(Math.random() * 5 +1);
}

// Frosty first guess

// print to the console that it is Frosty's turn.
console.log("Frosty's turn!\n\n");

// print Frosty's guess to the console
console.log("Frosty makes a guess of " + frostyGuess + ".");

// if frostyGuess is a hit.
if(frostyGuess == hit){

	// increment totalFrostyHits by 1.
    totalFrostyHits ++;

	// print to the console that Frosty hit the user.
    console.log("POW! Frosty nailed you!");

	// generate a new random number for Frosty to use for a guess.
    frostyGuess = Math.floor(Math.random() * 5 + 1);

	// generate a new hit number.
    hit = Math.floor(Math.random() * 5 + 1);

// otherwise,
}else{

	// print to the console that Frosty missed.
    console.log("SWISH! Frosty missed!");

	// generate a new random number for Frosty to use for a guess.
    frostyGuess = Math.floor(Math.random() * 5 + 1);
}

// user second guess

// prompt the user to make a second guess and save it to userGuess.
userGuess = prompt("You're turn " + userName + "! Make your guess.");

// if the userGuess is empty
if(userGuess === ""){

	// prompt the user again and save the answer to userGuess.
    userGuess= prompt("You gotta guess a number to throw your snowball! What's it gonna be?");

	// if userGuess is still empty,
    if(userGuess === ""){

		// print to the console that they are too slow and continue.
        console.log("You're too slow!\n");
    }

// otherwise if userGuess is greater than hit,
}else if(userGuess > hit){

	// print to the console that they threw it too high.
    console.log("Wowza! You threw that one over his head!");

// otherwise if userGuess is less than hit,
}else if(userGuess < hit){

	// print to the console that they threw it too low.
    console.log("Looks like you need to eat your Wheaties! You threw that one too low!");

// otherwise,
}else{

	// print to the console a hit confirmation message.
    console.log("Great shot " + userName + "! You got a hit!");

	// increment totalUserHits by 1.
    totalUserHits ++;

	// generate a new random number and store it in hit.
    hit = Math.floor(Math.random() * 5 +1);
}

// Frosty second guess

// print to the console that it is Frosty's turn.
console.log("Frosty's turn!\n\n");

// print Frosty's second guess to the console.
console.log("Frosty makes a guess of " + frostyGuess + ".");

// if Frosty makes a hit,
if(frostyGuess == hit){

	// increment totalFrostyHits by 1.
    totalFrostyHits ++;

	// print to the console that Frosty hit the user.
    console.log("POW! Frosty nailed you!");

	// generate a new random number for Frosty to use for his next guess, and store it in frostyGuess.
    frostyGuess = Math.floor(Math.random() * 5 + 1);

	// generate a new random number for hit.
    hit = Math.floor(Math.random() * 5 + 1);

// otherwise,
}else{

	// print to the console that Frosty missed.
    console.log("SWISH! Frosty missed!");

	// generate a new random number for frostyGuess.
    frostyGuess = Math.floor(Math.random() * 5 + 1);
}

// user third guess

// prompt the user to make their last guess.
userGuess = prompt("Last snowball " + userName + "! Make your guess.");

// if the userGuess is empty,
if(userGuess === ""){

	// prompt the user again to make their last guess.
    userGuess= prompt("You gotta guess a number to throw your snowball! What's it gonna be?");

	// if the userGuess is still empty,
    if(userGuess === ""){

		// print to the console that the user is too slow and continue.
        console.log("You're too slow!\n");
    }

// otherwise if userGuess is greater than hit,
}else if(userGuess > hit){
		
	// print to the console that they threw it too high.
    console.log("Wowza! You threw that one over his head!");

// otherwise if, userGuess is less than hit,
}else if(userGuess < hit){

	// print to the console, that they threw it too low.
    console.log("Looks like you need to eat your Wheaties! You threw that one too low!");

// otherwise,
}else{

	// increment totalUserHits by 1.
    totalUserHits ++;

	// print to the console a hit confirmation message.
    console.log("Great shot " + userName + "! You got a hit!");

	// generate a new random number for hit.
    hit = Math.floor(Math.random() * 5 +1);
}

// Frosty third guess

// print to the console that it is Frosty's turn.
console.log("Frosty's turn!\n\n");

// print to the console Frosty's third guess.
console.log("Frosty makes a guess of " + frostyGuess + ".");

// if Frosty makes a hit,
if(frostyGuess == hit){

	// increment totalFrostyHits by 1.
    totalFrostyHits ++;

	// print to the console a hit confirmation message.
    console.log("POW! Frosty nailed you!");

// otherwise,
}else{

	// print to the console that Frosty missed.
    console.log("SWISH! Frosty missed!");
}

