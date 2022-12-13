function concatenar(array1, array2) {
  array1.push(...array2);
  return array1;
}
const novoArray = concatenar([1, 2, 3], [4, 5, 6]);
console.log(novoArray);
