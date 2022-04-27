// Traer los elementos

const $dropDown = document.querySelector('#tipos');
const $inputNum = document.querySelector('#inputNum');
const $inputTxt = document.querySelector('#inputTxt');
const $button = document.querySelector('#cta');
const $table = document.querySelector('#tablita');
//Trae el <td></td> donde va el total 
const $total = document.querySelector('#total');
let suma = 0;

const constructor = (e) =>{
    //CREA LOS td
    const $tdDescription = document.createElement('td');
    const $tdType = document.createElement('td');
    const $tdImport = document.createElement('td');

    //LOS HACE HIJOS DE 
    e.appendChild($tdDescription);
    e.appendChild($tdType);
    e.appendChild($tdImport);

    //Agrega Texto a los td
    $tdDescription.textContent = `${$inputTxt.value}`
    $tdImport.textContent = `${$inputNum.value}`
    $tdType.textContent = `${$dropDown.value}`
} 


//Realiza la suma total de los egresos e ingresos
const sumarTotal = () =>{
    if($dropDown.value === 'Ingreso'){
        suma += new Number($inputNum.value)
    }else{
        suma-= new Number($inputNum.value)
    }
    return suma;
}

//Celda Verde o Roja
const colorCelda = (element) =>{ 
    if($dropDown.value === 'Ingreso'){
        element.classList.add('celda-ingreso')
        element.classList.remove('celda-egreso')
    }else{
        element.classList.add('celda-egreso')
        element.classList.remove('celda-ingreso')
    }
}

$button.addEventListener('click', () => {
    const $trElement = document.createElement('tr');
    constructor($trElement);
    $table.appendChild($trElement);
    $total.textContent = `$${sumarTotal()}`
    colorCelda($trElement);
})

