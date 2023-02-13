const result = document.getElementById('result');
const number = document.getElementById('input-number');
const button = document.getElementById('btn-submit');

function clearScreen() {
  const p = document.getElementsByTagName('p');
  for (let i = p.length - 1; i >= 0; i--) {
    p[i].parentNode.removeChild(p[i]);
  }
}

function showInScreen(text) {
  const p = document.createElement('p');
  p.innerText = text;
  result.appendChild(p);
}

const time = () => {
  return new Date().toLocaleTimeString();
};

function sleep(value) {
  clearScreen();
  showInScreen(`[${time()}] Initializing sleep function...`);
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      setTimeout(() => {
        reject(value);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(value);
      }, 3000);
    }
  })
    .then((response) => {
      showInScreen(`[${time()}] Return from sleep function: ${response}...`);
    })
    .catch(() => {
      showInScreen(`[${time()}] Error: Please insert a value into the input...`);
    })
    .finally(() => {
      showInScreen(`[${time()}] Finished sleep function!`);
    });
}

button.addEventListener('click', () => {
  sleep(parseFloat(number.value));
});
