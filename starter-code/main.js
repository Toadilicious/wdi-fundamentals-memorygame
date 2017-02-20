console.log("JS file is connected to HTML! Woo!");

/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

//function createCards(x) {

	// create an HTML card for each card with class of 'card'
	// add the elements
	// give them the class of 'card'
	//
	//}
//}

// find how many elements have 'game-board as Id'
var findGameBoard = document.getElementById('game-board');
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard() {
	//instead of looping through a fixed number
	//loop through the length of the cards
	for (var i = 0; i<cards.length; i++) {
		//this will set the card's 'data-card' to be the element of the array
		//data - attributes are meant to store data about element that is not
		//tied to a style,
		//i.e., 'king'.

		var newCard = document.createElement('div');
		newCard.className = 'card';
		findGameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		//when a card is clicked the function isTwoCards will be executed
		newCard.addEventListener('click', isTwoCards);
	}
}

function isMatch() {
//	if (cardTwo === cardFour) {
//		alert ("You found a match!");
//	} else {
//		alert ("Sorry, try again.");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!")
	} else {
		alert ("Sorry, try again.");
	}
}

//checks to see if there are cards in play
function isTwoCards() {
	newCard.innerHTML = '<img src="kingOfSpades.png" alt="King of Spades" />';
	//add card to array of cards in play
	//'this' hasn't been covered in this pre-work, but
	//for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));

	//newCard.innerHTML = '<img src="kingOfSpades.png" alt="King of Spades" />';
	//newCard.innerHTML = '<img src="queenOfHearts.png" alt="Queen of Hearts"';

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
