class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    toString() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

class Pessoa {
    constructor(nome, cpf, nascimento) {
        this._nome = nome;
        this._cpf = cpf;
        this.nascimento = nascimento;
    }

    getNome(){
        return this.nome;
    }

    toString() {
        return `Nome: ${this._nome} | CPF: ${this._cpf} | Nascimento: ${this.nascimento.toString()}`
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, nascimento, admissao, salario) {
        super(nome, cpf, nascimento);
        this.admissao = admissao;
        this.salario = salario;
    }

    toString() {
        return `${super.toString()} | Admissao: ${this.admissao.toString()} | Salario: ${salario}`
    }
}

class Gerente extends Funcionario {
    constructor(nome, cpf, nascimento, admissao, salario, departamento, promocaoGerente){
        super(nome, cpf, nascimento, admissao, salario);
        this.departamento = departamento;
        this.promocaoGerente = promocaoGerente;
    }

    getDepartamento() {
        return this.departamento;
    }

    toString() {
        return `${super.toString} | Departamento: ${this.departamento} | Promoção: ${this.promocaoGerente}`
    }
}

const data1 = new Data(10, 5, 22);

console.log(data1.toString());
console.log("Carlos", "123.456.789-00", new Data(17,4,99))