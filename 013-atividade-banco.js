const prompt = require('prompt-sync')();

let loginUsuario = prompt("Digite seu nome de usuario: ");
let loginSenha = prompt("Digite sua senha: ");

loginUsuario = loginUsuario.toLowerCase();

let saldo = 0;
let usOk = false;
let snOk = false;

if (loginUsuario === "will") {
    usOk = true;

    if (loginSenha === "123456") {
        snOk = true;
        saldo = 1000;
    }
}

else if (loginUsuario === "kaua") {
    usOk = true;

    if (loginSenha === "12345") {
        snOk = true;
        saldo = 500;
    }
}

else if (loginUsuario === "erick") {
    usOk = true;

    if (loginSenha === "1234") {
        snOk = true;
        saldo = 0;
    }
}

let acessoPermitido = usOk && snOk;

if (!acessoPermitido) {
    console.log("Acesso negado");
}

else if (saldo <= 0) {
    console.log(`Bem-vindo ${loginUsuario}, seu saldo atual e de R$${saldo.toFixed(2)}`);
    console.log("Saldo insuficiente");
}

else {
    console.log(`Bem-vindo ${loginUsuario}, seu saldo atual e de R$${saldo.toFixed(2)}`);

    let valorSaque = parseInt(prompt("Digite o valor que deseja sacar: "));

    if (valorSaque > 0 && valorSaque <= saldo) {

        let novoSaldo = saldo - valorSaque;

        let notas50 = parseInt(valorSaque / 50);
        let restante = valorSaque % 50;

        console.log("Saque realizado com sucesso!");
        console.log(`Valor sacado: R$${valorSaque.toFixed(2)}`);
        console.log(`Novo saldo: R$${novoSaldo.toFixed(2)}`);
        console.log(`Notas de R$50: ${notas50}`);
        console.log(`Restante para notas menores: R$${restante.toFixed(2)}`);
    }

    else {
        console.log("Valor de saque invalido");
    }
}