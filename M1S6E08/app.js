function listUsers(item) {
  const p = document.createElement('p');
  p.innerHTML = `<img class="character-image" src="${item.picture.large}"\>  <span class="character-name">${item.name.title} ${item.name.first} ${item.name.last} - ${item.email} - ${item.location.street.name}, ${item.location.street.number} - ${item.location.city} - ${item.location.state}, ${item.location.country}</span>`;
  document.body.appendChild(p);
}

function getUser() {
  const apiUrl = 'https://randomuser.me/api/?results=5';

  return fetch(apiUrl, { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((item) => {
        console.log(item);
        listUsers(item);
      });
    });
}

getUser();
