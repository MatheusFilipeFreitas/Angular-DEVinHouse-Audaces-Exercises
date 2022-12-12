document.getElementById('botao').addEventListener('click', function () {
  mensagemOla();
});

function mensagemOla() {
  var nome = document.getElementById('nome').value;
  if (nome != '') {
    document.getElementById('resultado').innerHTML = `Olá, ${nome}!`;
  } else {
    document.getElementById('resultado').innerHTML = ``;
  }
}
