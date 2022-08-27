const gameContainer = document.querySelector(".main"),
  emptys = document.querySelectorAll(".empty"),
  reset = document.getElementById("reset"),
  player1 = document.querySelector(".player1"),
  player2 = document.querySelector(".player2"),
  score1 = document.querySelector(".score1"),
  score2 = document.querySelector(".score2");

const o = "o";
const x = "x";

gameContainer.addEventListener("click", addElement);
reset.addEventListener("click", () => {
  resetBoard();
  resetScore();
});

function addElement(e) {
  let o = document.querySelectorAll(".o").length;
  let x = document.querySelectorAll(".x").length;

  let raund = e.target;

  if (o < x && e.target.className === "empty") {
    addO(raund);
    player2.firstElementChild.classList.remove("circle");
    player1.firstElementChild.classList.add("circle");
    winControl("o", "Player 2", score2);
  }
  if (x <= o && e.target.className === "empty") {
    addX(raund);
    player1.firstElementChild.classList.remove("circle");
    player2.firstElementChild.classList.add("circle");
    winControl("x", "Player 1", score1);
  }
  drawControl();
}

function addO(e) {
  e.className += " o";
}
function addX(e) {
  e.className += " x";
}

function winControl(e, name, score) {
  if (emptys[0].classList.contains(e) && emptys[1].classList.contains(e) && emptys[2].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[3].classList.contains(e) && emptys[4].classList.contains(e) && emptys[5].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[6].classList.contains(e) && emptys[7].classList.contains(e) && emptys[8].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[0].classList.contains(e) && emptys[3].classList.contains(e) && emptys[6].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[1].classList.contains(e) && emptys[4].classList.contains(e) && emptys[7].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[2].classList.contains(e) && emptys[5].classList.contains(e) && emptys[8].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[0].classList.contains(e) && emptys[4].classList.contains(e) && emptys[8].classList.contains(e)) {
    winner(name, score);
  } else if (emptys[2].classList.contains(e) && emptys[4].classList.contains(e) && emptys[6].classList.contains(e)) {
    winner(name, score);
  }
}

function winner(name, score) {
  resetBoard();
  Swal.fire({
    position: "center",
    title: `${name} Winner`,
    showConfirmButton: false,
    timer: 2000,
  });
  Math.floor(score.textContent++);
}

function drawControl() {
  let arrEmtys = [];
  emptys.forEach((e) => {
    arrEmtys.push(e.classList.length);
  });

  if (arrEmtys.includes(1) == false) {
    Swal.fire({
      position: "center",
      title: "Draw",
      showConfirmButton: false,
      timer: 2000,
    });
    resetBoard();
  }
}

function resetBoard() {
  emptys.forEach((e) => {
    e.classList.remove("x");
    e.classList.remove("o");
  });
  player2.firstElementChild.classList.remove("circle");
  player1.firstElementChild.classList.add("circle");
}

function resetScore() {
  score1.textContent = 0;
  score2.textContent = 0;
}
