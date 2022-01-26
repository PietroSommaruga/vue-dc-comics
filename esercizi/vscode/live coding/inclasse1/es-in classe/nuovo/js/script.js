
const outputHtml = document.getElementById('output');// // variabile
// const outputHtml = document.getElementById("output")

// // creo lka variabile della data odierna
// let today = new Date ();
// let year= today.getFullYear()

// // prompt chiedo l'anno di nascita
// let userAge = prompt(`Inserisci l'anno di nascita`)

// // 
// if (userAge >= 18){
// outputHtml.innerHtml = "Bravo! sei maggiorenne"

// } else {
//     outputHtml.innerHtml = " mminorenne!!!!"
// }



//  ---------------------------------------------
// let x = Math.floor (Math.random() * 10);
// console.log(x)


// if ( x === 1) {
//     outputHtml.innerHTML = 'è il numero 1';
// } else if (x  > 5) {
//     outputHtml.innerHTML = `<br/> il numero è maggiore di 5 `
// } else {
//     outputHtml.innerHTML = `<br/> il numero è minore o uguale di 5`
// };
//  ---------------------------------------------


const newImbucato = 'Gino';
let text;
switch (newImbucato) {
    
    
    case "Gino":
      text = "Gino, entra pure!";
      break;

    case "Pino":
      text = "Pino, entra pure!";
    break;

    case "Lino":
      text = "Lino, entra pure!";
    break;

    default:
      text = "Chiamo le guardie";
}

outputHtml.innerHTML += `<br/>${text}`;

let h = 5;

if (h % 2 == 0) {
    outputHtml.innerHTML += '<br/>il numero è pari';
} else {
    outputHtml.innerHTML += '<br/>il numero è dispari';
}