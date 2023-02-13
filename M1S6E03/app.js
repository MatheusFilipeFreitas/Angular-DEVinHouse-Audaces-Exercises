function clearScreen() {
  const p = document.getElementsByTagName('p');
  for (let i = p.length - 1; i >= 0; i--) {
    p[i].parentNode.removeChild(p[i]);
  }
}

function displayOnScreen(result) {
  const p = document.createElement('p');
  p.innerText = `$: ${result}`;
  document.body.appendChild(p);
}

function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) resolve(true);
    else reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then(() => {
    displayOnScreen('Aprovado');
  })
  .catch(() => {
    displayOnScreen('Reprovado');
  })
  .finally(() => {
    displayOnScreen('Fim do processamento');
  });
