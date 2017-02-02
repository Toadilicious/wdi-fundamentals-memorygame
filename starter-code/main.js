console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour) {
	alert ("You found a match!");
} else {
	alert ("Sorry, try again.");
}*/
function createCards(x) {
	// find how many elements have 'game-board as Id'
	var findGameBoard = document.getElementById('game-board');

	// create an HTML card for each card with class of 'card'
	for(var i = 0; i < x; i++) {
	// add the elements	
		var newCard = document.createElement('div');
	// give them the class of 'card'
		newCard.className = 'card';
	// 
		document.querySelector("#game-board").appendChild(newCard);
	}
}
