const prompt = require("prompt-sync")();

const strNum1 = prompt("Insira o primeiro número: ");
const strNum2 = prompt("Insira o segundo número: ");
const num1 = Number(strNum1);
const num2 = Number(strNum2);

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

if (num2 === 0) {
    console.log("Não é possível dividir por zero.");
} else {
    const divisao = num1 / num2;
    const restoDivisao = num1 % num2;
    console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    console.log(`Resto da divisão: ${num1} % ${num2} = ${restoDivisao}`);
}
