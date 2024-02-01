const alarmElm = document.querySelector('.alarm');
const audioElm = document.querySelector('audio');
const resetBtnElm = document.querySelector('.reset-button');
resetBtnElm.addEventListener('click', stopCountdown);

const userTime =
  Number(prompt('Nastavte, za kolik vteřin začne minutka zvonit.')) * 1000;

const timerID = setTimeout(ring, userTime);

function ring() {
  if (userTime > 0) {
    alarmElm.classList.add('alarm--ring');
    audioElm.play();
  } else {
    alert('Zadejte číslo vyšší než 0. Použijte číslice a ne slova.');
  }
}

function stopCountdown() {
  if (userTime !== 0) {
    clearTimeout(timerID);
    toastTrigger();
  }
}

function toastTrigger() {
  const toastElm = document.querySelector('.toast');
  toastElm.classList.add('show');
  setTimeout(() => {
    toastElm.classList.remove('show');
  }, 2500);
}
