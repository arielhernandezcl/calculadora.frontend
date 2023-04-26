window.addEventListener('load', () => {
    const BotonesCalc = document.getElementsByClassName('boton');
    const display = document.querySelector('.display-calculadora');
    
    const BotonesCalcArray = Array.from(BotonesCalc);
    
    BotonesCalcArray.forEach( (button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);
        });

    });
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }

}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    }
}
