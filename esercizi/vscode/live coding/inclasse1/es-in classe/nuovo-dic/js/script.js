const colors = ['blue', 'red', 'green', 'black', 'orange'];
let currentIndex = 0
// ogni volta che cliccherò su un pulsante
// mostrerò il nome dello studente successivo
const boxColored = document.querySelector ('.box');
const nextButton = document.querySelector('.next');
const beforeButton = document.querySelector('.before');

boxColored.style.backgroundColor = colors[currentIndex];

// before
beforeButton.addEventListener('click', function () {
    currentIndex--;
    if(currentIndex < colors.length -1) {
        currentIndex = 0;
    }
    boxColored.style.background = colors[currentIndex];
})

// next
nextButton.addEventListener('click', function () {
    currentIndex++;
    if(currentIndex > colors.length -1) {
        currentIndex = 0;
    }
    boxColored.style.background = colors[currentIndex];
})