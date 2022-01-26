for (let i = 0; i < 10; i++) {
    console.log(i, 'Penny!')
}

console.log('----------------ghgggggggggggggggg----------------')

let i = 0;
while ( i < 10 ) {
    console.log(i, 'Penny!')
    i++;
}

let userResponse = '';

while (userResponse.toLowerCase() !=='roma')  {
    userResponse = prompt('Qual\' è la capitale d\'Italia?')
}

console.log('-----------------aaaaaaaaaaaaaa---------------')


//  break
let x = 0;
while (x < 10) {
    console.log( x, 'Penny')
    x++
    if ( x === 5) {
        break;
    }
}

console.log('--------------oooooo------------------')

// let y = 0;
// do {
//     console.log(y, 'Penny!');
//     y++;
// } while(y < 10)


let urerResponseB = '';

do {
    userResponseB = prompt('Qual\' è la capitale d\'Italia?');
} while(userResponseB.toLowerCase() !== 'roma')