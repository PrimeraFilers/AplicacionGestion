var x = document.querySelector(".correo");
console.log(x);
var y = document.querySelector(".psswd");
console.log(y);


function iniciosesion() {
    if (x.value == "javier@alumnos.com" && y.value == "javier123") {
        window.location.href = "alumno-javier/index.html";
    } else if (x.value == "fran@alumnos.com" && y.value == "fran123") {
        window.location.href = "alumno-fran/index.html";
    } else if (x.value == "francisco@profesores.com" && y.value == "francisco123") {
        window.location.href = "profesores-francisco.html";
    } else if (x.value == "joseantonio@profesores.com" && y.value == "joseantonio123") {
        window.location.href = "profesores-joseasntonio.html";
    } 
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);
x.addEventListener("input",vaciadax);
y.addEventListener("input",vaciaday);


function vaciadax(){
    if (x.value==""){
        document.querySelector(".emailada").textContent="Por favor introduzca el correo electrónico";
        document.querySelector(".emailada").style.borderColor="red";
    } else if (x.value!=="javier@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }  else if (x.value !== "fran@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "francisco@profesores.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "joseantonio@profesores.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }
    
}
function vaciaday(){
    if (y.value==""){
        document.querySelector(".contrasada").textContent="Por favor introduzca la contraseña";
    }  else if ( y.value!=="javier123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }  else if ( y.value !== "fran456") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if ( y.value !== "francisco") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (y.value !== "joseantonio") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }
}