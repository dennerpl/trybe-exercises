/*
1- declarar variáveis de linhas ou de linhas e espaços
2- iniciar um loop para colocar a quantidade de espaços
3- inicialmente será o valor da base -1
4- as próximas repetições precisarão reduzir -1 ao valor anterior
5- posso utilizar o contador para fazer esta subtração
6- após sair deste primeiro loop adicionar os asteriscos
7- eles se iniciam em 1 e vão aumentando até chegar no valor da base
8- posso utilizar o contador do loop
9- após este passo posso imprimir no final do loop
*/

let tamanhoBase = 5;

if(tamanhoBase > 1) {
    for (let i=1; i <= tamanhoBase; i += 1) {
        console.log(" ".repeat(tamanhoBase - i) + ("*".repeat(i)))
    }
}