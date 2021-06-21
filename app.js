const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');

// Store
let startTimer = null;

function timer() {
  if (hour.value == 0 && minute.value == 0 && second.value == 0) {
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
  } else if (second.value != 0) {
    second.value--;
  } else if (minute.value != 0 && second.value == 0) {
    second.value = 59;
    minute.value--;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    hour.value--;
  }
  return;
}

startButton.addEventListener('click', () => {
  startTimer = setInterval(function () {
    timer();
  }, 1000);
});

resetButton.addEventListener('click', () => {
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
});
