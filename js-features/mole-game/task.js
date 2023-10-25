const deadElement = document.getElementById("dead");
let deadValue = deadElement.textContent;

const lostElement = document.getElementById("lost");
let lostValue = deadElement.textContent;

function getHole(index) {
  return document.getElementById(index);
}

for (let i = 1; i <= 9; i++) {
  let item = getHole(`hole${i}`);
  item.onclick = function () {
    if (item.classList.contains("hole_has-mole")) {
      deadValue++;
      deadElement.textContent = deadValue;
    } else {
      lostValue++;
      lostElement.textContent = lostValue;
      if (lostValue === 5) {
      }
    }
    gameOver();
  };
}

function gameOver() {
  if (deadValue === 10) {
    alert("Вы выиграли!");
    deadValue = 0;
    deadElement.textContent = deadValue;
    lostValue = 0;
    lostElement.textContent = lostValue;
  }
  if (lostValue === 5) {
    alert("Вы проиграли!");
    deadValue = 0;
    deadElement.textContent = deadValue;
    lostValue = 0;
    lostElement.textContent = lostValue;
  }
}
