const id1 = document.querySelector('#i1');
const id2 = document.querySelector('#i2');
const id3 = document.querySelector('#i3');
const resultado = document.querySelector('#resultado');
const ingresar = document.querySelector('#ingresar');

function pass() {
    console.log("entre")

    if(id1.value == 9 && id2.value == 9 && id3.value == 1) {
        console.log("Password 1  correcto")
        resultado.innerHTML="Password 1  correcto"
    } else if (id1.value == 7 && id2.value == 1 && id3.value == 4) {
        console.log ("Password 2  correcto")
        resultado.innerHTML="Password 2  correcto"
    } else {
        console.log ("Password incorrecto")
        resultado.innerHTML="Password incorrecto"
    }
}

ingresar.addEventListener("click",pass);