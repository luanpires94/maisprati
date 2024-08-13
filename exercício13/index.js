// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

var prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));

    if (numero === 0) {
        break;
    }

    if (!isNaN(numero)) {
        soma += numero;
        contador++;
    } else {
        alert("Entrada inválida. Por favor, insira um número decimal.");
    }
}

if (contador > 0) {
    let media = soma / contador;
    alert("A média aritmética dos números é: " + media.toFixed(2));
} else {
    alert("Nenhum número válido foi inserido.");
}