
var scores, roundScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  turnScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  dice = Math.floor(Math.random() * 6) + 1;

  document.querySelector("#current-" + activePlayer).textContent = dice;
  document.querySelector(".dice").style.display = "none";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";

  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
}

document.querySelector(".btn-new").addEventListener("click", function() {
  init();
});

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;

    document.getElementById("current-" + activePlayer).textContent = dice;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. Update the Logic

    if (dice == 1) {
      turnScore = 0;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = turnScore;
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      turnScore = 0;

      document.querySelector("#current-0").textContent = 0;
      document.querySelector("#current-1").textContent = 0;

      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
    } else {
      turnScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = turnScore;
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
if (gamePlaying) {
  scores[activePlayer] += turnScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] > 50) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    gamePlaying = false;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    turnScore = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
}
});
