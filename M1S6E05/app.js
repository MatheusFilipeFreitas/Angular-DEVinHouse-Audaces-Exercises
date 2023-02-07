function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  const response = await obterClienteNoBancoDeDados(7);
  return response;
}

processar().then((cliente) => console.log(cliente));
