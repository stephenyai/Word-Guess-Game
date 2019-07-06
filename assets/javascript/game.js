var foodWords = ['sushi', 'hamburger', 'pasta', 'pizza', 'apple', 'pineapple', 'galbi', 'omakase', 'bread', 'dumplings', 'gyro', 'taco', 'flauta', 'rice'];

var randomWord;
var maxTries = 12;
var numGuesses = 0;
var totalWins = 0;
var guessWord = [];
var lettersGuessed = [];
var startGame = false;
var endGame = false;

var wordString = document.querySelector('#wordPlace');
var start = document.querySelector('.start');
var winTotal = document.querySelector('#totalMeals');
var guessesLeft = document.querySelector('#guessesLeft');
var wrongLetters = document.querySelector('#lettersGuessed')

function defaultPage() {

	numGuesses = maxTries;
	guessesLeft.innerText = maxTries;
	winTotal.innerText = totalWins;
	startGame = false;

	randomWord = foodWords[Math.floor(Math.random() * foodWords.length)];

	guessWord = [];
	lettersGuessed = [];

	for (var i=0; i<randomWord.length; i++) {
		guessWord.push("_");
	}

	display();
}

function display() {

	guessesLeft.innerText = numGuesses;
	winTotal.innerText = totalWins;
	wrongLetters.innerText = lettersGuessed;
	wordString.innerText = "";

	for (var i=0; i<guessWord.length; i++) {
		wordString.innerText += guessWord[i];
	}

	if (numGuesses<=0) {
		endGame = true;
		wordString.innerText = "No food for you. Press any key to play again.";
	}
}

function guessCheck() {

	if (endGame) {	
		defaultPage();
		endGame = false;
	} else {
		if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
			noDuplicate();
		} 
	}
}

function noDuplicate() {

	if (lettersGuessed.indexOf(event.key) === -1) {
		start.classList.add('hide');

		gameBegins();
	}

	display();
	winCheck();
}

function gameBegins() {

	var newArray = [];
	var lowerCase = event.key.toLowerCase();

	for (var i=0; i<randomWord.length; i++) {
		if (lowerCase === randomWord[i]) {
			newArray.push(i);
		}
	}

	if (newArray.length<=0) {
		numGuesses--;
		lettersGuessed.push(lowerCase);
	} else {
		for (var i=0; i<newArray.length; i++) {
			guessWord[newArray[i]] = lowerCase;
			console.log('fii', guessWord);
		}
	}

	display();
}

function winCheck() {
	if (guessWord.indexOf("_") === -1) {
		wordString.innerText = "Today, you dine!";
		totalWins++;
		endGame = true;
	}
}

document.onkeypress = guessCheck;

defaultPage();

