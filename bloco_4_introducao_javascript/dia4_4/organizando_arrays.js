let numeros = [2, 3, 6, 7, 10, 1]

function ordemCrescente(array) {
    function comparacao(a, b) {
        return a - b;
    };
    return console.log(array = array.sort(comparacao))
}

ordemCrescente(numeros)

function ordemDecrescenteComum(array) {
    function comparacao(a, b) {
        return b - a;
    };
    return console.log(array = array.sort(comparacao))
}

ordemDecrescenteComum(numeros)

function usandoRevert(array) {
    function comparacao(a, b) {
        return a - b;
    };
    return console.log(array = array.sort(comparacao).reverse())
}

usandoRevert(numeros)