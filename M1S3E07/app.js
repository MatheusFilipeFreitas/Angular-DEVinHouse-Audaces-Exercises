const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matematica',
};

const frase = (pessoa) => {
  var { nome, idade, profissao } = pessoa;
  console.log(`Esta é ${nome}, tem ${idade} anos e é ${profissao}.`);
};

frase(pessoa);
