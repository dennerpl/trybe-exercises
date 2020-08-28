// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;

for (i = 0; i < numbers.length; i += 1) {
    if (maiorNumero < numbers[i]) {
        maiorNumero = numbers[i]
    }
}

console.log(`O maior número deste array é o ${maiorNumero}`)