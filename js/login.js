var x = document.querySelector(".correo");
console.log(x); 
var y = document.querySelector(".psswd");
console.log(y);


function iniciosesion() {
    if((x.value == "javier@alumnos.com" && y.value == "javier123") || (x.value == "fran@alumnos.com" && y.value == "fran456")) {
        window.location.href="alumnos.html";

    }else if((x.value == "francisco@profesores.com" && y.value == "francisco") || (x.value == "joseantonio@profesores.com" && y.value == "joseantonio")){
        window.location.href="profesores.html";
    }else{
        alert("Usuario y contraseña incorrectos");
    }
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);

