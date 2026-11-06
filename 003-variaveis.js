let entrada = require('prompt-sync')();

/* comentário de várias linhas */

let nome = 'will'; // string

let idade = 18; // number

let trabalha = true; // boolean

let endereço = {
    rua: 'alagoas',
    num: 126,
    bairro: 'vila santa luzia'
} // objeto: chave e valor

let função = () => console.log('oi');

// tipos de variáveis

console.log('tipos de variáveis');

console.log('variável: nome ' + typeof(nome));

console.log('variável: idade ' + typeof(idade));

console.log('variável: trabalho ' + typeof(trabalha));

console.log('variável: endereço ' + typeof(endereço));

console.log('variável: função ' + typeof(função));

// variaveis definidas sem valor

let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

// dando valor às variaveis

nomeDigitado = entrada ('Digite seu nome: ');
idadeDigitada = entrada ('Qual a sua idade: ');
trabalhaDigitado = entrada ('Você trabalha:' );

console.log('nome: ' + nomeDigitado + ' - tipo: ' + typeof(nomeDigitado));
console.log('idade: ' + idadeDigitada + ' - tipo: ' + typeof(idadeDigitada));
console.log('trabalha: ' + trabalhaDigitado + ' - tipo: ' + typeof(trabalhaDigitado));


