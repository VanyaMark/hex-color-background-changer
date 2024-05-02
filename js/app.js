// Implementar solución aquí
const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const title = document.querySelector('#hex-value')

const randomColor = () => Math.floor(Math.random() * 256);

function generateHexColor() {
    const makingColorCode = '0123456789ABCDEF';
    let finalCode = '#';
    for (let counter = 0; counter < 6; counter++) {
        finalCode += makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}

const changeColor = () =>{
    let color = generateHexColor();
    body.style.backgroundColor = color;
    title.textContent = color;

}

btn.onclick = changeColor;
