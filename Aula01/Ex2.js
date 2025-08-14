class FuncionariosDoHospital {
    constructor(nome){
        this._nome = nome;
        this._numeroRestantesDeFerias = 20;
    }

    tirarFerias(num_dias) {
        if(FuncionariosDoHospital._numeroRestantesDeFerias-num_dias> 0){
            FuncionariosDoHospital._numeroRestantesDeFerias -= num_dias;
            console.log(FuncionariosDoHospital._nome + " tirou " + num_dias + " de Férias");
            console.log(FuncionariosDoHospital._nome + " ainda tem " +
                FuncionariosDoHospital._numeroRestantesDeFerias + " dias de Férias");
        } else {
            console.log(FuncionariosDoHospital._nome + " possui somente " + 
                FuncionariosDoHospital._numeroRestantesDeFerias + " dias de Férias restantes");
        }
    }
}

class Medico extends FuncionariosDoHospital {
    constructor(nome, cpf){
        super(nome);
        this._cpf = cpf;
    }
}

class Enfermeira extends FuncionariosDoHospital {
    constructor(nome){
        super(nome);
        this._certificados = [];
    }

    adicionarCertificado(certificado) {
        this._certificados.push(certificado);
        console.log("O certificado " + certificado + " foi adicionado!");
    }
}