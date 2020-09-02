let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function usandoRevert(array) {
    function comparacao(a, b) {
        return b.length-a.length;
    }

    array = array.sort(comparacao)
    return console.log(array[0])
}

usandoRevert(nomes)