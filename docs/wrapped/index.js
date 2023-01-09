let time = 5;
let counterValue = document.getElementById("counter-value");
let counter = document.getElementById("counter");
let button = document.getElementById("download-button");

let modifyCounter = function () {
  if (time > 1) {
    time--;
    counterValue.innerHTML = time;
  } else {
    counter.classList.add("hide");
    button.classList.remove("hide");
    confetti.start();
  }
};

let download = function () {
  window.open(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  );
};

button.addEventListener("click", download);

setInterval(modifyCounter, 1000);
