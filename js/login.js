var x = document.querySelector(".correo");
console.log(x);
var y = document.querySelector(".psswd");
console.log(y);


function iniciosesion() {
    if (x.value == "javier@alumnos.com" && y.value == "javier123") {
        window.location.href = "alumnos-javier.html";
    } else if (x.value == "fran@alumnos.com" && y.value == "fran456") {
        window.location.href = "alumnos-fran.html";
    } else if (x.value == "francisco@profesores.com" && y.value == "francisco") {
        window.location.href = "profesores-francisco.html";
    } else if (x.value == "joseantonio@profesores.com" && y.value == "joseantonio") {
        window.location.href = "profesores-joseantonio.html";
    } 
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);
var a = document.querySelector(".correo");
var b = document.querySelector(".psswd");
a.addEventListener("input",vaciadax);
b.addEventListener("input",vaciaday);
var c = document.querySelector(".enter").addEventListener("click", textada);


function textada(){
    if (x.value!=="javier@alumnos.com" || y.value!=="javier123"){
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }  else if (x.value !== "fran@alumnos.com" || y.value !== "fran456") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "francisco@profesores.com" || y.value !== "francisco") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "joseantonio@profesores.com" || y.value !== "joseantonio") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else {
        document.querySelector(".emailada").textContent="Datos correctos";
        document.querySelector(".emailada").style.color="green";
    }
}
function vaciadax(){
    if (x.value==""){
        document.querySelector(".emailada").textContent="Por favor introduzca el correo electrónico";
    }else{
        document.querySelector(".emailada").textContent="";
    }
}
function vaciaday(){
    if (y.value==""){
        document.querySelector(".contrasada").textContent="Por favor introduzca la contraseña";
    }else{
        document.querySelector(".contrasada").textContent="";
    }
}