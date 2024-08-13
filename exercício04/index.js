// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

var prompt = require('prompt-sync')();

console.log("Menu Interativo:");
console.log("1 - Opção 1: Dizer Olá");
console.log("2 - Opção 2: Mostrar Data Atual");
console.log("3 - Opção 3: Sair");

let escolha = prompt('Escolha uma opção (1, 2, 3):');

switch (escolha) {
    case '1':
        console.log("Olá! Você escolheu a Opção 1.");
        break;
    case '2':
        let dataAtual = new Date();
        console.log("Data Atual: " + dataAtual.toLocaleDateString());
        break;
    case '3':
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
        break;
}
