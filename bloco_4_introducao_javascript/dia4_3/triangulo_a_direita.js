// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let tamanhoBase = 5;
let linhas = "*";
if (tamanhoBase > 1) {
    for (let i = 0; i < tamanhoBase; i += 1) {
        if (i == 0) {
            console.log(linhas)
        } else {
            linhas = linhas + "*"
            console.log(linhas)
        }
    }
}