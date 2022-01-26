const output1Html = document.querySelector('.output1');


for (let i = 0; i <= 20; i++) {
    output1Html.innerHTML += `${i} `
}

// --------------------------------------------------------------------

const output2Html = document.querySelector('.output2')

for (let c = 0; c < 16; c++) {
    if (c % 5 === 0 && c !== 0){
    output2Html.innerHTML += `<div class="box"> ${c} </div>`
    } else if (c % 2 === 0){
        output2Html.innerHTML += `<div class="box box-black">${c}</div>`
    } else {
        output2Html.innerHTML += `<div class="box box-red">${c}</div>`
    }}
