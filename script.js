let seconds = 0;
let tens = 0;
let mint = 0;
let hour = 0;
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMint = document.querySelector(".mint");
let getHour = document.querySelector(".hour");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

btnStart.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(startTimer, 10);
  }
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  tens = "00";
  seconds = "00";
  mint = "00";
  hour = "00";
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMint.innerHTML = mint;
  getHour.innerHTML = hour;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 60) {
    mint++;
    getMint.innerHTML = "0" + mint;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0

  }
  if (mint > 99) {
    getMint.innerHTML = mint;
  }
}
