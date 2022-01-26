function createNewBox(container) {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    container.append (newBox);
    newBox.addEventListener('click', function() {
        this.classList.add('green');
    })
}

const containerHtml = document.querySelector('.campionato-container')
for (let i = 0; i < 100; i++) {
    createNewBox(containerHtml);
}