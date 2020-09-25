const exercise = "Antônio foi no banheiro e não sabemos o que aconteceu"
const longestWord = (text) => {
    const arraySort = text.split(" ").sort(function(a,b){return b.length-a.length});
    return arraySort[0]
}
console.log(longestWord(exercise))