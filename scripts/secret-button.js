const button = document.getElementById('secret-button');
let currentScale = 1;

button.addEventListener('click', function() {
    setInterval(function() {
        currentScale *= 1.02;
        button.style.transform = `scale(${currentScale})`;
        if (currentScale > 1000) {
            window.location = 'secret-page.html';
        }
    } , 10);
});

