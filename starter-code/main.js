console.log("JS file is connected to HTML! Woo!");

// find how many elements have 'game-board as Id'
var board = document.getElementById('game-board');
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

		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		//when a card is clicked the function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards);

		// append the card to the board
	  board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

//checks to see if there are cards in play
function isTwoCards() {
	//add card to array of cards in play
	//'this' hasn't been covered in this pre-work, but
	//for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="kingOfSpades.png" alt="King of Spades" />';
	} else {
		this.innerHTML = '<img src="queenOfHearts.png" alt="Queen of Hearts"/>';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
var cardReset = [];

//check for a match
function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!")
		// console.log(cardsInPlay);
		// console.log(cardsInPlay[0]);
		// cardsInPlay[0].innerHTML='';

	} else {
		alert ("Sorry, try again.");
	}
	for(var x = 0; x<cards.length;x++) {
		// console.log(cardReset);
		// console.log(cards.length);
		cardReset.push(document.getElementsByClassName('card'));

		cardReset[x].innerHTML='';
	}
}

createBoard();
