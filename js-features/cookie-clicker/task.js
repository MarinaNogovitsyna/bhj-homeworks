const clickElement = document.getElementById("clicker__counter");
let clickValue = clickElement.textContent;
const speedElement = document.getElementById("clicker__speed");
let speedValue = speedElement.textContent;
const cookie = document.getElementById("cookie");
let firstTime;
let secondTime;

debugger;
cookie.onclick = function () {
  clickValue++;
  clickElement.textContent = clickValue;
  clickValue === 1
    ? (firstTime = new Date().getTime())
    : (secondTime = new Date().getTime());
  changeTime();
  speedElement.textContent = speedValue;
  cookie.width === 200 ? (cookie.width = 250) : (cookie.width = 200);
};

function changeTime() {
  if (clickValue === 1) {
    speedValue = 1;
  } else {
    speedValue = (1 / ((secondTime - firstTime) / 1000)).toFixed(2);
    firstTime = secondTime;
  }
}
