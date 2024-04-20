// let num = prompt("Enter a number of times you want to play:");
let userScore = 0;
let compScore = 0;
let count = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const drawGame = () => {
  msg.innerText = "Draw";
  msg.style.backgroundColor = "#081b31";
  msg.style.display = "inline";
};

const play = (userChoice) => {
  const compChoice = generateCompChoice();
  if (userChoice === compChoice) {
    drawGame();
    count++;
  } else {
    let userWin = 0;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? 0 : 1;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? 0 : 1;
    } else {
      userWin = compChoice === "rock" ? 0 : 1;
    }
    return userWin;
  }
  return null;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const res = play(userChoice);
    if (res == 1) {
      userScore++;
      count++;
      document.getElementById("user-score").innerText = userScore;
      msg.innerText = "You Won";
      msg.style.backgroundColor = "green";
      msg.style.display = "inline";
    }
    if (res == 0) {
      compScore++;
      count++;
      document.getElementById("comp-score").innerText = compScore;
      msg.innerText = "You Lose";
      msg.style.backgroundColor = "Red";
      msg.style.display = "inline";
    }
    if (count == 5) {
      let compFinalScore = parseInt(
        document.getElementById("comp-score").innerText
      );
      let userFinalScore = parseInt(
        document.getElementById("user-score").innerText
      );
      document.getElementById("rock").classList.add("disabled");
      document.getElementById("paper").classList.add("disabled");
      document.getElementById("scissors").classList.add("disabled");
      msg.style.display = "inline";
      if (userFinalScore > compFinalScore) {
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green";
      } else if (userFinalScore < compFinalScore) {
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "Red";
      } else {
        msg.innerText = "Draw";
        msg.style.backgroundColor = "#081b31";
      }
      document.getElementById("restart").style.display = "inline";
    }
  });
});

let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  document.getElementById("rock").classList.remove("disabled");
  document.getElementById("paper").classList.remove("disabled");
  document.getElementById("scissors").classList.remove("disabled");
  count=0;
  userScore=0;
  compScore=0;
  document.getElementById("comp-score").innerText = compScore;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("restart").style.display = "none";
  msg.style.display = "none";
});
