const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#elParrafo');

btn.addEventListener('click', btnOnclick);

function btnOnclick(event) {
    event.preventDefault(event);
    const sumaInputs =  parseInt(input1.value) + parseInt(input2.value);
    parrafo.innerText = "El resultado es " + sumaInputs;
};





