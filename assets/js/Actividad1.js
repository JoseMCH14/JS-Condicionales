const imagen = document.querySelector('#imagen1');

    function estilo1(){

        if(imagen.style.border){
            console.log("entre")
            imagen.style.border = '';
        }else{
            console.log("no entre")
            imagen.style.border = '2px solid red'
        }

    }

imagen.addEventListener("click",estilo1);











