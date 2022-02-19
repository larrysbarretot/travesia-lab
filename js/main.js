let nStep = 10;
const steps = [];
const stop = document.querySelector('#stop');
const intro = document.querySelector('#intro');
const map = document.querySelector('#map');
const images = ['exploracion', 'play', 'memoria', 'exploracion', 'play', 'stop', 'alfoli', 'exploracion', 'play', 'rehidratate'];

for(let i = 0; i < nStep; i++) {
    steps.push(document.querySelector(`#step-${i+1}`));
}

steps.forEach(step => {
    step.addEventListener('click', () => {
        stop.src = `img/${images[parseInt(step.id.substring(5))-1]}.svg`;
        stop.classList.add('stop-show');
    });
})

stop.addEventListener('click', () => {
        stop.classList.add('stop-hide');
    setTimeout(() => {
        stop.classList.remove('stop-show');
        stop.classList.remove('stop-hide');
    }, 3000)
})