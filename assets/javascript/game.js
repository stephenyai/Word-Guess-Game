var foodWords = ['sushi', 'hamburger', 'pasta', 'pizza', 'chocolate', 'pineapple', 'ramen', 'kelp', 'bread', 'burrito', 'croissant', 'cheese', 'flauta', 'rice', 'strawberries', 'udon'];

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
var photos = document.querySelector('.photos');
var winPhoto = document.querySelector('#win');

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

	winPhoto.style.cssText= "display: none";
	photos.style.cssText= "display: flex";
	start.innerText = "Press any key to get started!"

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
		start.classList.remove('hide');	
		start.innerText = "No donut for you. Press any key to play again."
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
		start.classList.remove('hide');	
		start.innerText = "You get your donut! Press any key to play again.";
		totalWins++;
		winPhoto.style.cssText= "display: block";
		photos.style.cssText= "display: none";

		endGame = true;
	}
}

document.onkeypress = guessCheck;

defaultPage();

