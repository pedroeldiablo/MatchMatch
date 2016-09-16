var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour ="king";

var isMatch = function(cardsInPlay) {
	if(cardsInPlay[0] === "queen" && cardsInPlay[1] === "queen"){
		alert("You found a match!");
	}
	else if (cardsInPlay[0] === "king" && cardsInPlay[1] === "king"){
		alert("You found a match!");
	}	
	else if ((cardsInPlay[0] === "queen" && cardsInPlay[1] === "king") || (cardsInPlay[0] === "king" && cardsInPlay[1] === "queen")){
		alert("Sorry, try again.");
	}
};

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay =[];

var gameBoard = document.getElementById("game-board");

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay =[];
	}
};

createBoard = function (){
	for (var i = 0; i<cards.length; i++) {
	var newCard = document.createElement('div');
	newCard.className= "card";
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	document.getElementsByClassName('board')[0].appendChild(newCard);

	}
};


createBoard();

