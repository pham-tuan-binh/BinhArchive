let time = 5;
let counterValue = document.getElementById("counter-value");
let counter = document.getElementById("counter");
let button = document.getElementById("download-button");

let modifyCounter = function () {
  if (time < 1) {
    counterValue.innerHTML = "";
    counter.classList.add("hide");
    button.classList.remove("hide");
    confetti.start();
  } else {
    time--;
    counterValue.innerHTML = time;
  }
};

timerID = setInterval(modifyCounter, 1000);

setTimeout(() => clearInterval(timerID), 6000);
