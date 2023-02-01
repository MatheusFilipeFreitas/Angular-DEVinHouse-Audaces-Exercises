import Usuario from "./Usuario.js";

const form = document.getElementById("form");
const response = document.getElementById('response');

const userTeste = new Usuario('Teste', 'teste@teste.com', 'teste');


const loginAuthentication = (event) => {
    event.preventDefault();

    const emailInput = event.target.inputEmail.value;
    const passwordInput = event.target.inputPassword.value;

    if(userTeste.autenticar(emailInput, passwordInput)){
        response.innerText = 'Login successful';
    }else{
        response.innerText = 'Login failed';
    }
}

form.addEventListener('submit', loginAuthentication);


