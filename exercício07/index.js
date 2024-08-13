// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

var prompt = require('prompt-sync')();

let numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

let precoPorMaca;
if (numeroDeMacas < 12) {
    precoPorMaca = 0.30;
} else {
    precoPorMaca = 0.25;
}

let valorTotal = numeroDeMacas * precoPorMaca;

console.log("O valor total da compra é: R$ " + valorTotal);
