const button = document.getElementById('secret-button');
let currentScale = 1;

button.addEventListener('click', function() {
    if (currentScale > 500) {
        window.location.href = 'secret-page.html';
    }
    else {
        currentScale *= 1.5;
        this.style.transform = `scale(${currentScale})`;
        console.log(currentScale);
    }
});