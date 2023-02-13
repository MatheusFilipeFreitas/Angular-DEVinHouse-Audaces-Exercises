const title = document.querySelector('.title');
const titleContainer = document.querySelector('.title-container');

const fakeTime = () => parseInt(Math.random() * 10000);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

function displayChosenOnScreen(enterprise) {
  title.innerHTML = enterprise;
  titleContainer.appendChild(title);
}

const result = Promise.race([retornoEmpresa1, retornoEmpresa2]).then((value) => {
  displayChosenOnScreen(value);
});
