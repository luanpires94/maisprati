// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para exibir a tabuada:"), 10);

if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
} else {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert("A tabuada do número " + numero + " é:\n" + resultado);
}