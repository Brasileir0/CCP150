// FUNÇÃO TRADICIONAL
function Apresentação(nome, sobrenome) {
    return `Olá, ${nome} ${sobrenome}, eu sou uma função!`
}

// FUNÇÃO DE SETA
const Apresentar = (nome, sobrenome) => `Olá, ${nome} ${sobrenome}, eu sou uma função!`;

console.log(mensagem("Vinicius", "Nobre"));