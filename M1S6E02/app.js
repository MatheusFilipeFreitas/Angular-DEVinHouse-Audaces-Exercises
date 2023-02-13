const timerElement = document.createElement('p');
timerElement.setAttribute('class', 'timer');

function displayTimeOnScreen(time) {
  timerElement.innerText = time;
  document.body.appendChild(timerElement);
}

const timer = function () {
  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    displayTimeOnScreen(time);
  }, 1000);
};

timer();
