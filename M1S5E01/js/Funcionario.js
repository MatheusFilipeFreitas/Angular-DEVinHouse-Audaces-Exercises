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
        let strCpf = this.#removingCpfFormat(cpf);
        var Soma;
        var Resto;
        Soma = 0;
        if (strCpf == "00000000000") return false;

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCpf.substring(9, 10)) ) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCpf.substring(10, 11) ) ) return false;
        return true;
    }

    #removingCpfFormat(cpf) {
        let loop = true;
        do{
            if(cpf.includes('.' || '-')){
                cpf = cpf.replace('.','');
                cpf = cpf.replace('-','');
            }else{
                loop = false;
            }
        }while(loop);
               
        return cpf;
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