//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let tamanhoLado = 3;
let matriz = []
if (tamanhoLado > 1) {
    for (let i = 0; i < tamanhoLado; i += 1) {
        matriz[i] = "*"
        
    }
    for (let j = 0; j < tamanhoLado; j += 1) {
        console.log(matriz)
    }
}


let linhas = "*"
if (tamanhoLado > 1) {
    for (let i = 1; i < tamanhoLado; i += 1) {
        linhas = linhas + "*"
    }
    for (let j = 0; j < tamanhoLado; j += 1) {
        console.log(linhas)
    }
}
