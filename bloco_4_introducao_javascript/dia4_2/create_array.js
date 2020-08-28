/*Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/

let novoArray = []

for (i=1; i <= 25; i += 1) {
    novoArray.push(i)
}

console.log(novoArray)

novoArray.forEach(element => {
    console.log(element/2)
});
