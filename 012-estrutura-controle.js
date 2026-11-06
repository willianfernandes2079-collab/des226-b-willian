const prompt = require("prompt-sync")();

const usuario = "will";
const senha = "will2";

let acessoPermitido = false;

console.log("Informe suas credenciais para acessar o sistema:");

const loginUsuario = prompt("Nome do usuario: ");
const loginSenha = prompt("Senha: ");

if (usuario === loginUsuario && senha === loginSenha) {
    acessoPermitido = true;
}

if (acessoPermitido) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

prompt("Pressione enter para finalizar o programa");