const timerElement = document.getElementById("timer");
let timerValue = timerElement.textContent;

function decreaseTimer() {
  timerValue--;
  timerElement.textContent = `00:00:${
    timerValue > 9 ? timerValue : "0" + timerValue
  }`;

  if (timerValue <= 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
    window.location = "https://netology.ru/";
  }
}

const timerInterval = setInterval(decreaseTimer, 1000);
