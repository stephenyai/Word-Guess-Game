var foodWords = ['sushi', 'hamburger', 'pasta', 'pizza', 'apple', 'pineapple', 'galbi', 'omakase', 'bread', 'dumplings', 'gyro', 'taco', 'flauta', 'rice'];

var maxTries = 10;
var numGuesses = 0;
var totalWins = 0;
var guessWord = [];
var lettersGuessed = [];

var wordString = document.querySelector('#wordPlace');
var start = document.querySelector('.start');
var winTotal = document.querySelector('#totalMeals');
var guessesLeft = document.querySelector('#guessesLeft');
var wrongLetters = document.querySelector('#lettersGuessed');
var randomWord = foodWords[Math.floor(Math.random() * foodWords.length)];

function guessCheck(letter) {

	start.classList.add('hide');

	if (event.keyCode >= 65 && event.keyCode <= 90) {
		letter + 32;
	} else {
	}
		
	gameBegins()
}

function defaultPage() {
	guessesLeft.innerText = maxTries;
	winTotal.innerText = totalWins;

	guessWord = [];
	lettersGuessed = [];

	for (var i=0; i<randomWord.length; i++) {
		guessWord.push("_")
	}
}

function display() {
	guessesLeft.innerText = maxTries-numGuesses;
	winTotal.innerText = totalWins;
	wrongLetters.innerText = lettersGuessed;
	wordString.innerText = "";

	for (var i=0; i<guessWord.length; i++) {
		wordString.innerText += guessWord[i];
	}
}

function gameBegins() {

		var newArray = [];
		var lowerCase = event.key.toLowerCase();
		
		for (var i=0; i<randomWord.length; i++) {
			if (event.key === randomWord[i]) {
				newArray.push(i);
			}
		}

		if (newArray.length<=0) {
			numGuesses++;
			lettersGuessed.push(event.key);
		} else {
			for (var i=0; i<newArray.length; i++) {
				guessWord[newArray[i]] = event.key;
				console.log('fii', guessWord);
			}
		}
	
		display();
}

document.onkeypress = guessCheck;

defaultPage();

