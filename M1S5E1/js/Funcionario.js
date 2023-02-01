export default class Funcionario {
    constructor(cpf, nomeCompleto, salario){
        if(this.#validateCpf(cpf)){
            console.log('Valid CPF... creating object...');
            this.cpf = cpf;
            this.nomeCompleto = nomeCompleto;
            this.salario = salario;
        }else{
            console.error('Invalid CPF');
        }
   
    }

    #validateCpf(cpf) {
        //logic
        return false;
    }

    promover(percentual){
        this.salario *= (percentual/100+1);
    }
}



// class Funcionario {
//     constructor(cpf, nomeCompleto, salario){
//         this.cpf = cpf;
//         this.nomeCompleto = nomeCompleto;
//         this.salario = salario;
//     }

//     promover(percentual){
//         this.salario *= (percentual/100+1);
//     }
// }

// export default Funcionario;