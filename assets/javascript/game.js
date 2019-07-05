var foodWords = ['sushi', 'hamburger', 'pasta', 'pizza', 'apple', 'pineapple', 'galbi', 'omakase', 'bread', 'dumplings', 'gyro', 'taco', 'flauta', 'rice'];

var maxTries = 10;
var numGuesses = 0;
var guessWord = [];

var wordString = document.querySelector('#wordPlace');
var start = document.querySelector('.start');
var winTotal = document.querySelector('#totalMeals');
var guessesLeft = document.querySelector('#guessesLeft');
var wrongLetters = document.querySelector('#lettersGuessed');
var randomWord = foodWords[Math.floor(Math.random() * foodWords.length)];

function defaultPage() {
	numGuesses = maxTries;

	for (var i=0; i<randomWord.length; i++) {
		guessWord.push("_")
	}

	wordString.innerText = "";
	
	for (var i=0; i<guessWord.length; i++) {
		wordString.innerText += guessWord[i];
	}
	
}

function gameBegins() {

	start.classList.add('hide');

	// if (event.keyCode >= 65 && event.keyCode <= 90) {
		
		var newArray = [];

		for (var i=0; i<randomWord.length; i++) {
			if (event.key === randomWord[i]) {
				newArray.push(i);
			}
		};
		
		if (event.key !== randomWord[i]) {
			numGuesses++
		} else {
			
		}
		//wordString.innerText = guessWord[i];
	//}
}

document.onkeypress = gameBegins;


defaultPage();