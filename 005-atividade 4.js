const prompt = require("prompt-sync")();

const cpf = prompt("Digite seu CPF: ");
const email = prompt("Digite seu e-mail: ");



const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("CPF válido: ", cpfRegex.test(cpf));
console.log("E-mail válido: ", emailRegex.test(email));

