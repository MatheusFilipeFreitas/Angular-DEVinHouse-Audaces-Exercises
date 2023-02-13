function listUsers(item) {
  const p = document.createElement('p');

  p.innerHTML = `<ul class="user-list">
  <li class="user">
    <img class="user-photo" src="${item.picture.large}">
    <div class="user-info">
      <p class="user-name">Name: ${item.name.title} ${item.name.first} ${item.name.last}</p>
      <p class="user-email">Email: ${item.email}</p>
      <p class="user-location">Location: ${item.location.street.name}, ${item.location.street.number} - ${item.location.city} - ${item.location.state}, ${item.location.country}</p>
    </div>
    </li>
</ul>`;
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
        listUsers(item);
      });
    });
}

getUser();
