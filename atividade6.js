const prompt = require("prompt-sync")();

let usuario1 = "will";
let senha1 = "123456";
let saldo1 = 1000;

let usuario2 = "kaua";
let senha2 = "12345";
let saldo2 = 500;

let usuario3 = "erick";
let senha3 = "1234";
let saldo3 = 0;

let loginUsuario = prompt("Digite seu nome de usuário: ").toLowerCase();
let loginSenha = prompt("Digite sua senha: ");
let usOk = false;
let snOk = false;
let saldo = 0;

// Cada usuário possui sua própria senha e saldo.
if (loginUsuario === usuario1) {
    usOk = true;
    snOk = loginSenha === senha1;
    saldo = saldo1;
} else if (loginUsuario === usuario2) {
    usOk = true;
    snOk = loginSenha === senha2;
    saldo = saldo2;
} else if (loginUsuario === usuario3) {
    usOk = true;
    snOk = loginSenha === senha3;
    saldo = saldo3;
}

let acessoPermitido = usOk && snOk;

if (!acessoPermitido) {
    console.log("Acesso negado!");
} else {
    console.log("Bem-vindo, " + loginUsuario);
    console.log("Saldo disponível: R$ " + saldo.toFixed(2));

    let valorSaque = Number(prompt("Digite o valor que deseja sacar: "));

    if (!Number.isInteger(valorSaque) || valorSaque <= 0) {
        console.log("Digite um valor inteiro maior que zero.");
    } else if (valorSaque > saldo) {
        console.log("Saldo insuficiente.");
    } else if (valorSaque === 1 || valorSaque === 3) {
        console.log("Não é possível formar esse valor com as notas disponíveis.");
    } else {
        let restante = valorSaque;
        let notas5 = 0;

        // Para valores ímpares, separa uma nota de 5 antes das notas pares.
        if (restante % 2 !== 0) {
            notas5 = 1;
            restante = restante - 5;
        }

        let notas50 = Math.floor(restante / 50);
        restante = restante % 50;

        let notas20 = Math.floor(restante / 20);
        restante = restante % 20;

        let notas10 = Math.floor(restante / 10);
        restante = restante % 10;

        let notas2 = Math.floor(restante / 2);
        saldo = saldo - valorSaque;

        console.log("Saque realizado com sucesso!");
        console.log("Valor sacado: R$ " + valorSaque.toFixed(2));
        console.log("Notas de R$ 50: " + notas50);
        console.log("Notas de R$ 20: " + notas20);
        console.log("Notas de R$ 10: " + notas10);
        console.log("Notas de R$ 5: " + notas5);
        console.log("Notas de R$ 2: " + notas2);
        console.log("Novo saldo: R$ " + saldo.toFixed(2));
    }
}
