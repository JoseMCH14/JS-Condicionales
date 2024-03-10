const verificar = document.querySelector('#verificar');
const respuesta = document.querySelector('#respuesta');


console.log("Hola entre en JS", 'Inicializacion')

function prueba(){
    let s1 = Number(document.querySelector('#s1').value);
    let s2 = Number(document.querySelector('#s2').value);
    let s3 = Number(document.querySelector('#s3').value);

    console.log(s1, 'sticker1')
    console.log(s2, 'sticker2')
    console.log(s3, 'sticker3')

    total = s1 + s2 +s3

    console.log(total, 'suma')

    if ((s1 < 0 || s1 >10) || (s2 < 0 || s2 >10) || (s3 < 0 || s3 >10)){
        respuesta.innerHTML = "Por favor, colocar valores entre 0 y 10" 
    } else if (total > 10) {
        respuesta.innerHTML = "Llevas demasiados stickers"
    } else {
        respuesta.innerHTML = 'Llevas '+total+' stickers'
    }
}

verificar.addEventListener("click",prueba)