function verificacaoPalindromos(palavra) {
    let palavraTestada = palavra;
    let palavraGerada = "";
    let contador = palavraTestada.length-1
    for (i=contador; i>=0; i-=1){
        palavraGerada += palavraTestada[i]
    }
    return palavraTestada == palavraGerada;
}

console.log(verificacaoPalindromos("ovo"))