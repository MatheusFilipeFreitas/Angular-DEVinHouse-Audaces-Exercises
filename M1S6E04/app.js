const fakeTime = () => parseInt(Math.random() * 10000);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

const result = Promise.race([retornoEmpresa1, retornoEmpresa2]).then((value) => {
  console.log(value);
});
