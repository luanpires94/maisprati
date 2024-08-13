// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

let A = 4;
let B = 5;
let C = 6;

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero: todos os lados são iguais.");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles: dois lados são iguais.");
    } else {
        console.log("Triângulo Escaleno: todos os lados são diferentes.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
