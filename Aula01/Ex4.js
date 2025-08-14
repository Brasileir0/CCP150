const processarMensagem = (mensagem, callback) => callback(mensagem);

const mensagemA = (mensagem) => `Alerta: ${mensagem}`
const contagem = (mensagem) => `A mensagem contém ${mensagem.size()} caracteres`;

console.log(processarMensagem("Sistema em Manutenção", mensagemA));
console.log(contagem);