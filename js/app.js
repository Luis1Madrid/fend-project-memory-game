/*
 * Create a list that holds all of your cards
 */
document.querySelector(".deck").addEventListener("click", clickCard);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function clickCard(evt) {
  if (evt.target.nodeName === "LI"){
    var info = evt.target.className;
    var cardsTurned = document.querySelectorAll(".open").length;

// Show card if is not already turned up and only up to two at a time
    if (info == "card" && cardsTurned < 2) {
      evt.target.classList.add("open");
      evt.target.classList.add("show");
    }

    matchCard();
  }
}

function matchCard(evt) {

  var cardsOpen = document.querySelectorAll(".open");
  var cardOpenOne = cardsOpen[0].childNodes[1].className;
  var cardOpenTwo = cardsOpen[1].childNodes[1].className;
  if (cardsOpen.length > 1) {
    if (cardOpenOne == cardOpenTwo) {
      console.log("match!!");
    }
  }
  console.log(cardsOpen.length);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
