// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = 0;

for (i = 0; i < numbers.length; i += 1) {
    if (menorNumero > numbers[i]) {
        menorNumero = numbers[i]
    }
}

console.log(`O maior número deste array é o ${menorNumero}`)