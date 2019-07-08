var foodWords = ['sushi', 'hamburger', 'pasta', 'pizza', 'chocolate', 'pineapple', 'ramen', 'kelp', 'bread', 'burrito', 'croissant', 'gouda', 'flauta', 'rice'];

var randomWord;
var maxTries = 12;
var numGuesses = 0;
var totalWins = 0;
var inputLetter = [];
var lettersGuessed = [];
var newStr = "";
var endGame = false;

var wordString = document.querySelector('#wordPlace');
var start = document.querySelector('.start');
var winTotal = document.querySelector('#totalMeals');
var guessesLeft = document.querySelector('#guessesLeft');
var wrongLetters = document.querySelector('#lettersGuessed')

function defaultPage() {

	numGuesses = maxTries;
	winTotal.innerText = totalWins;

	newStr = "";
	wordString.innerText = "";
	inputLetter = [];
	lettersGuessed = [];

	guessesLeft.innerText = numGuesses;
	winTotal.innerText = totalWins;
	wrongLetters.innerText = lettersGuessed;

	randomWord = foodWords[Math.floor(Math.random() * foodWords.length)];

	for (var i=0; i<randomWord.length; i++) {
			newStr += "_";
	}
	wordString.innerText = newStr;

	display();

}

function display() {

	guessesLeft.innerText = numGuesses;

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
			start.classList.add('hide');	

			noDuplicate();
		} 
	}
}

function noDuplicate() {

	var lowerCase = event.key.toLowerCase();
	var noComma;
	inputLetter.push(lowerCase);

	if ((!lettersGuessed.includes(lowerCase)) && (!randomWord.includes(lowerCase))) {
		lettersGuessed.push(lowerCase);
		numGuesses--;
		noComma = lettersGuessed.join("");
		wrongLetters.innerText = noComma;
	}

	newStr = "";

	for (var i=0; i<randomWord.length; i++) {
		if (inputLetter.includes(randomWord[i])) {
			newStr += randomWord[i];
		} else {
			newStr += "_";	
		}
	}

	wordString.innerText = newStr;

	display();
	winCheck();
}

function winCheck() {
	if (newStr === randomWord) {
		wordString.innerText = "You get your donut!";
		totalWins++;
		endGame = true;
	}
}

document.onkeypress = guessCheck;

defaultPage();

