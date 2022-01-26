const wordOne = prompt('inserisci una parola')
const wordTwo = prompt('inserisci una parola')

if (wordOne.length > wordTwo.length){
    console.log(wordTwo)
    console.log(wordOne)
} else if (wordOne.length < wordTwo.length){
    console.log(wordOne)
    console.log(wordTwo)
} else {
    console.log(wordOne)
    console.log(wordTwo)
    console.log('hanno la stessa grandezza')
}