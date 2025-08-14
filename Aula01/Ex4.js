const processarMensagem = (mensagem, callback) => callback(mensagem);

// a) Junta duas strings:
const mensagemA = (mensagem) => `Alerta: ${mensagem}`

// b) Calcula o número de caracteres:
const contagem = (mensagem) => `A mensagem contem ${mensagem.length} caracteres`;

// c) Informa se a mensagem é composta por somente maíscula ou minúscula, ou ambas:
const isLowerCase = (mensagem) => /^[a-z]+$/.test(mensagem);
const isUpperCase = (mensagem) => /^[A-Z]+$/.test(mensagem);


// a) Junta duas strings:
console.log(processarMensagem("Sistema em Manutenção", mensagemA));

// b) Calcula o número de caracteres:
console.log(processarMensagem(processarMensagem("Sistema em Manutenção", mensagemA), contagem));

// c) Informa se a mensagem é composta por somente maíscula ou minúscula, ou ambas:
console.log(processarMensagem(processarMensagem("Sistema em Manutenção", mensagemA), isLowerCase));
console.log(processarMensagem(processarMensagem("Sistema em Manutenção", mensagemA), isUpperCase));
