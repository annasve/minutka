const alarmElm = document.querySelector('.alarm');
const audioElm = document.querySelector('audio');
const resetBtnElm = document.querySelector('.reset-button');
resetBtnElm.addEventListener('click', stopCountdown);

const userTime =
  Number(prompt('Nastavte, za kolik vteřin začne minutka zvonit.')) * 1000;

const timerID = setTimeout(ring, userTime);

function ring() {
  alarmElm.classList.add('alarm--ring');
  audioElm.play();
}

function stopCountdown() {
  clearTimeout(timerID);
  alert('Zrušeno');
}
