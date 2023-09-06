const button = document.getElementById('secret-button');
let currentScale = 1;
let grow;

button.addEventListener('click', function() {
    grow = setInterval(function() {
        if (currentScale < 1000) {
            currentScale *= 1.02;
            button.style.transform = `scale(${currentScale})`;
        } else {
            window.location = 'secret-page.html';
            clearInterval(grow);
        }
    }, 10);
});
