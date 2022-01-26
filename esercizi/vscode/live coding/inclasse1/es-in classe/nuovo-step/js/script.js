

// creo la funzione click sul button

    // genero numero da 1 a 6 ogni volta che click
    function numRandom(min, max) {
        const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return result;
    }

    const button = document.getElementById('player1-run')
    const output = document.getElementById('demo')
    const cpuButton = document.getElementById('player2-run')
    const cpuOutput = document.getElementById('cpuDemo')

     let numberOne;
     let numberTwo;

    button.addEventListener('click',function () {
        numberOne = numRandom (1,6)
        output.innerHTML = num
    })

    function numRandom(min, max) {
        const cpuResult = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return cpuResult;
    }

    cpuButton.addEventListener('click',function () {
        numberTwo = numRandom (1,6)
        cpuOutput.innerHTML = num
    })
    
    const verdetto = document.getElementById('verdetto')
    if (numberOne > numberTwo) {
        verdetto.innerHTML = 'ho vinto io'
    } else if (numberOne < numberTwo) {
        verdetto.innerHTML = 'vince la cpu'
    } else {
        verdetto.innerHTML = 'pari'
    }