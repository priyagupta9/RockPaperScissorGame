"use strict";

// getElementById for selecying ID
//queryselecter for class
let userScore = 0;
let compScore = 0;
const smallUser = "user".fontsize(3).sub();
const smallComp = "comp".fontsize(3).sub();

const userScore_i = document.getElementById("user-score");
const compScore_i = document.getElementById("comp-score");
const score_i = document.querySelector(".score-board");
const result_i = document.querySelector(".result");
const rock_i = document.getElementById("r");
const paper_i = document.getElementById("p");
const scissor_i = document.getElementById("s");

function getCompChoice() {
  let choic = ["r", "p", "s"];
  let compChoice = Math.floor(Math.random() * 3);
  return choic[compChoice];
}

function convertToWord(a) {
  if (a == "r") return "Rock";
  if (a == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_i.innerHTML = userScore;
  result_i.innerHTML =
    convertToWord(userChoice) +
    smallUser +
    " beats " +
    convertToWord(compChoice) +
    smallComp +
    ". You Win!🔥";
  const newWinClass = document.getElementById(userChoice);
  newWinClass.classList.add("green-glow");
  //but this color remains fixed so we have set a time out
  setTimeout(function () {
    newWinClass.classList.remove("green-glow");
  }, 1000);
  //1st agrument function ,2nd argument time in milli sec i.e.
  // perform that function after the time completes
}
function loose(userChoice, compChoice) {
  compScore++;
  compScore_i.innerHTML = compScore;
  result_i.innerHTML =
    convertToWord(compChoice) +
    smallComp +
    " beats " +
    convertToWord(userChoice) +
    smallUser +
    ". You Lost...😢";
  const newLostClass = document.getElementById(userChoice);
  newLostClass.classList.add("red-glow");
  setTimeout(function () {
    newLostClass.classList.remove("red-glow");
  }, 1000);
}
function draw(userChoice, compChoice) {
  result_i.innerHTML =
    convertToWord(userChoice) +
    smallUser +
    " equals " +
    convertToWord(compChoice) +
    smallComp +
    ". It's a draw✨";
  const newDrawClass = document.getElementById(userChoice);
  newDrawClass.classList.add("gray-glow");
  setTimeout(function () {
    newDrawClass.classList.remove("gray-glow");
  }, 1000);
}
function game(userChoice) {
  let compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

//add event listener if you want to perform something when it is
//clicked(event)

rock_i.addEventListener("click", function () {
  game("r");
});
paper_i.addEventListener("click", function () {
  game("p");
});
scissor_i.addEventListener("click", function () {
  game("s");
});
