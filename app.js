const h1 = document.querySelector('h1')
// h1.style.color = 'purple';
h1.style.fontSize = '15em';
h1.style.fontFamily = 'Helvetica'

const body = document.querySelector('body')
body.style.display = 'flex';
body.style.justifyContent = 'center';
// body.style.alignItems = 'center';
body.style.background = '100vh black';

function randomColor (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter')


setInterval(function () {
    for (let letter of letters){
        letter.style.color = randomColor()
    }
}, 2000)

// to make transitiono of colors smoother use CSS
// we can set transition effect and change font style jusing css.

