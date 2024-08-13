// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

var prompt = require('prompt-sync')();

let somaTotal = 0;
let quantidade = 5;

for (let i = 1; i <= quantidade; i++) {
    let input = prompt(`Digite o ${i}º número:`);

    let numero = parseFloat(input);

    if (!isNaN(numero)) {
        somaTotal += numero;
    } else {
        alert("Entrada inválida. Por favor, insira um número.");
        i--;
    }
}

alert("A soma total dos números é: " + somaTotal);
