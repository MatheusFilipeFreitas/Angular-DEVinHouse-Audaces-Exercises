const verificaPalindromo = (string) => {
  let split = string.split('');
  let reverse = split.reverse();
  let join = reverse.join('');
  if (join == string) {
    return true;
  } else {
    return false;
  }
};

const teste1 = verificaPalindromo('ana');
const teste2 = verificaPalindromo('julia');

console.log(teste1);
console.log(teste2);
