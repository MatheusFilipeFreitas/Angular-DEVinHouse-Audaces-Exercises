const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
var currentPage = 1;

function clearScreen() {
  const container = document.querySelector('.container');
  if (container != null) container.remove();
}

function displayPaginationOnScreen(pagination) {
  if (pagination.next == null) {
    btnNext.disabled = true;
    btnPrev.disabled = false;
  } else if (pagination.prev == null) {
    btnPrev.disabled = true;
    btnNext.disabled = false;
  } else {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }
}

function displayCharactersOnScreen(item) {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `  
  <ul class="character-list">
    <li class="character">
      <img class="character-photo" src="${item.image}">
      <p class="character-name">${item.name}</p>
    </li>
  </ul>`;
  document.body.appendChild(container);
}

function getCharacters(number) {
  clearScreen();
  const apiUrl = 'https://rickandmortyapi.com/api/character?page=';

  return fetch(apiUrl + number, { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayPaginationOnScreen(data.info);
      data.results.forEach((item) => displayCharactersOnScreen(item));
    });
}

getCharacters(currentPage);

//console.log(listarPersonagens());

btnNext.addEventListener('click', () => {
  if (currentPage < 42) {
    currentPage++;
    getCharacters(currentPage);
  }
});

btnPrev.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    getCharacters(currentPage);
  }
});
