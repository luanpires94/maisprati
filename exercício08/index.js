// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

var prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 === valor2) {
    console.log("Os valores não podem ser iguais. Por favor, insira valores diferentes.");
} else {
    if (valor1 < valor2) {
        console.log("Valores em ordem crescente: " + valor1 + ", " + valor2);
    } else {
        console.log("Valores em ordem crescente: " + valor2 + ", " + valor1);
    }
}
