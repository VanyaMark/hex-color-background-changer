// Implementar solución aquí
const body = document.querySelector('body');
const btn = document.querySelector('#btn');

const randomColor = () => Math.floor(Math.random() * 256);

const changeColor = () =>{
    body.style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`)
    console.log('change')
}

btn.onclick = changeColor;
