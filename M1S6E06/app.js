const nome = 'Thais';
const apiUrl = 'https://api.agify.io/?country_id=BR&name=' + nome;

fetch(apiUrl, { method: 'GET' })
  .then((response) => response.text())
  .then((texto) => {
    const object = JSON.parse(texto);
    if (object.age != null) {
      console.log(object.name);
      console.log(object.age);
    } else {
      console.error(`Didnt find '${object.name}' in database`);
    }
  })
  .catch((err) => console.log(err.message));
