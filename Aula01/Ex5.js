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
        return `${super.toString()} | Admissao: ${this.admissao.toString()} | Salario: ${this.salario}`
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
        return `${super.toString()} | Departamento: ${this.departamento} | Promoção: ${this.promocaoGerente}`
    }
}

const data1 = new Data(10, 5, 22);
const pessoa1 = new Pessoa("Carlos", "123.456.789-00", new Data(17,4,99));
const funcionario1 = new Funcionario("Marcos", "987.654.321-00", new Data(18,5,95), new Data(18,5,17), "3500");
const gerente1 = new Gerente("Luiz", "111.222.333-44", new Data(19,6,89), new Data(20,6,22), 50000, 2, new Data(22,11,23));

console.log(data1.toString());
console.log(pessoa1.toString());
console.log(funcionario1.toString());
console.log(gerente1.toString());