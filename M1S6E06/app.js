const name = document.getElementById('name');
const btnSubmit = document.getElementById('btn-submit');
const results = document.querySelector('.results');

function clearScreen() {
  const p = document.getElementsByTagName('p');
  for (let i = p.length - 1; i >= 0; i--) {
    p[i].parentNode.removeChild(p[i]);
  }
}

function displayResultsOnScreen(person) {
  clearScreen();
  const resultName = document.createElement('p');
  resultName.innerHTML = `Name: ${person.name}`;
  const resultAge = document.createElement('p');
  resultAge.innerHTML = `Age: ${person.age}`;
  results.appendChild(resultName);
  results.appendChild(resultAge);
}

const getUserFromDatabase = function () {
  const apiUrl = 'https://api.agify.io/?country_id=BR&name=' + name.value.trim();
  fetch(apiUrl, { method: 'GET' })
    .then((response) => response.text())
    .then((texto) => {
      const object = JSON.parse(texto);
      if (object.age != null) {
        displayResultsOnScreen(object);
      } else {
        alert(`Didnt find '${object.name}' in database`);
      }
    })
    .catch((err) => console.log(err.message));
};

btnSubmit.addEventListener('click', () => {
  getUserFromDatabase();
});
