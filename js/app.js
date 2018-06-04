/*
 * Create a list that holds all of your cards
 */
document.querySelector(".deck").addEventListener("click", clickCard);
document.querySelector(".restart").addEventListener("click", playSetup);
var timeStart = 0;
var clicksPlaced = 0;

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
    var cardsTurned = document.querySelectorAll(".open");

// Show card if is not already turned up and only up to two at a time
    if (info == "card" && cardsTurned.length < 2) {
      evt.target.classList.add("open");
      evt.target.classList.add("show");
    }
    if (cardsTurned.length > 0){
    matchCard();
    }
  }
  var activeMatch = document.querySelectorAll(".match").length;

    if (activeMatch == 16){
      popWinCongrats();

    }
  //add time into html.
  clicksPlaced = clicksPlaced + 1;
  if (clicksPlaced == 1) {
    timeKeeper();
  }

}
//START matching a card engine
function matchCard(evt) {

  var cardsOpen = document.querySelectorAll(".open");
  var cardOpenOne = cardsOpen[0].childNodes[1].className;
  var cardOpenTwo = cardsOpen[1].childNodes[1].className;
  if (cardsOpen.length > 1) {
    if (cardOpenOne == cardOpenTwo) {
      for (var x = 0; x < 2; x++){
      cardsOpen[x].classList.remove("open", "show");
      cardsOpen[x].classList.add("match");
      }
      //console.log("match!!");

    } else {
      setTimeout(delayEventCard, 2000);
    }
  }
}

function delayEventCard () {
  var activeCards = document.querySelectorAll(".open");
  for (var x = 0; x < 2; x++) {
    activeCards[x].classList.remove("open", "show");
  }
}
//END matching card engine

//Congratulation window pop up, along with all other data about the game.

function popWinCongrats () {
  var msg = document.createElement("dialog");
  msg.className = "dialogBox";
  document.body.append(msg);

  var messageCongrats = document.createElement("h2");
  messageCongrats.textContent = "Congratulations finishing the game!";
  msg.append(messageCongrats);

  var playButton = document.createElement("button");
  playButton.textContent = "Play again!";
  playButton.className = "playAgain";
  msg.append(playButton);
  document.querySelector(".playAgain").addEventListener("click", playSetup);

  msg.showModal();

}

// On click Play again, will run this function

function playSetup() {
  var matchCards = document.querySelectorAll(".match");
  var activeCards = document.querySelectorAll(".card");
  for (var x = 0; x < activeCards.length; x++) {
    activeCards[x].classList.remove("match", "open", "show");

  }
  if (matchCards.length == 16) {
    var track = document.querySelector("dialog").close();
  }

}

//count time to display
function timeKeeper () {
  var timeElement = document.createElement("span");
  var timeTitle = document.createElement("span");
  timeTitle.textContent = "TIME: "
  timeElement.className = "timeKeep";
  timeElement.textContent = timeStart;
  var scorePanel = document.querySelector(".score-panel");
  scorePanel.append(timeTitle);
  scorePanel.append(timeElement);

  console.log(scorePanel);
}

function timeLoop() {
  timeStart = timeStart + 1;
  document.querySelector(".timeKeep").innerHTML = timeStart + " sec";
}

setInterval(timeLoop, 1000);



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
