var x = document.querySelector(".correo");
console.log(x); 
var y = document.querySelector(".psswd");
console.log(y);


function iniciosesion() {
    if(x.value == "javier@alumnos.com" && y.value == "javier123")  {
        window.location.href="alumnos-javier.html";
    }else if(x.value == "fran@alumnos.com" && y.value == "fran456"){
        window.location.href="alumnos-fran.html";
    }else if(x.value == "francisco@profesores.com" && y.value == "francisco"){
        window.location.href="profesores-francisco.html";
    }else if(x.value == "joseantonio@profesores.com" && y.value == "joseantonio"){
        window.location.href="profesores-joseantonio.html";
    }else{
    alert("Usuario y contraseña incorrectos");
    }
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);

