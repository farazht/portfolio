document.getElementById('background-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--background-color', 'hsl(' + Math.random() * 360 + ', 100%, 15%)');
});

document.getElementById('primary-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--primary-color', 'hsl(' + Math.random() * 360 + ', 100%, 65%)');
});

document.getElementById('lighter-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--lighter-color', 'hsl(' + Math.random() * 360 + ', 100%, 85%)');
});

document.getElementById('darker-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--darker-color', 'hsl(' + Math.random() * 360 + ', 100%, 45%)');
});

document.getElementById('gradient-start-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--gradient-start-color', 'hsl(' + Math.random() * 360 + ', 100%, 65%)');
});

document.getElementById('gradient-end-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--gradient-end-color', 'hsl(' + Math.random() * 360 + ', 100%, 45%)');
});

document.getElementById('reset-button').addEventListener('click', function () {
    document.documentElement.style.setProperty('--background-color', 'rgb(5, 25, 40)');
    document.documentElement.style.setProperty('--primary-color', 'rgb(220, 220, 220)');
    document.documentElement.style.setProperty('--lighter-color', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--darker-color', 'rgb(150, 150, 150)');
    document.documentElement.style.setProperty('--gradient-start-color', 'rgb(115, 150, 255)');
    document.documentElement.style.setProperty('--gradient-end-color', 'rgb(100, 215, 255)');
});