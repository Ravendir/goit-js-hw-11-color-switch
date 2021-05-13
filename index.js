const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#000000",
  "#FF44AA",
  "#AAAAAA",
  "#77ffaa",
  "#79ff48",
  "#445500",
  "#325079",
  "#442588",
];
const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector("[data-action='start']");
const btnStop = document.querySelector("[data-action='stop']");
const bodyRef = document.querySelector("body");

btnStart.addEventListener("click", changeColor);
btnStop.addEventListener("click", stopChange);

let startColorChange = null;

function changeColor(event) {
  if (startColorChange) return;
  btnStart.disabled = true;
  startColorChange = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(min, max);
    bodyRef.style.backgroundColor = colors[randomIndex];
  }, 1000);
}

function stopChange(event) {
  clearInterval(startColorChange);
  startColorChange = null;
  btnStart.disabled = false;
}
