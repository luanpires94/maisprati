// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

num = parseInt(prompt("Digite um número para calcular o fatorial: "));

if (num < 0) {
    console.log("Fatorial não existe para números negativos.");
} else if (num === 0) {
    console.log("O fatorial de 0 é 1.");
} else {
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${num} é ${fatorial}.`);
}

//*O fatorial de um número é o produto desse número por todos os seus antecessores maiores que zero