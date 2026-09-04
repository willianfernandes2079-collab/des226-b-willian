const prompt = require("prompt-sync")();

// 1. Instancia a data atual
const dataRegistro = new Date();

// 2. Solicita nome e matricula
const nome = prompt("Digite seu nome: ");
const matricula = prompt("Digite sua matricula: ");

// 3. Array com 3 disciplinas
const disciplinas = [
    "Programacao",
    "Banco de Dados",
    "Engenharia de Software"
];

// 4. Arrow function que recebe os dados e imprime o log
const registrarAcesso = (nome, matricula, disciplinas, data) => {
    console.log("\n== LOG DE ACESSO ==");
    console.log(`Aluno: ${nome}`);
    console.log(`Matricula: ${matricula}`);
    console.log(`Disciplinas: ${disciplinas.join(", ")}`);
    console.log(`Data e hora do registro: ${data.toLocaleString()}`);
    console.log("========================");
};

// Chamada da funcao
registrarAcesso(nome, matricula, disciplinas, dataRegistro);

// 5. Exibe o tipo da variavel da data e da funcao
console.log("\nTipo da data:", typeof dataRegistro);
console.log("Tipo da funcao:", typeof registrarAcesso);