function listCharacters(item) {
  const p = document.createElement('p');
  p.innerHTML = `<img class="character-image" src="${item.image}"\>  <span class="character-name">${item.name}</span>`;
  document.body.appendChild(p);
}

function getCharactes() {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  return fetch(apiUrl, { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((item) => listCharacters(item));
    });
}

getCharactes();

//console.log(listarPersonagens());
