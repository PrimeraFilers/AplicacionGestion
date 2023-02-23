var x = document.querySelector(".correo");
console.log(x);
var y = document.querySelector(".psswd");
console.log(y);


function iniciosesion() {
    if (x.value == "alvaro@alumnos.com" && y.value == "alvaro123") {
        window.location.href = "index-alumno.html";
    } else if (x.value == "ermejildo@alumnos.com" && y.value == "ermejildo123") {
        window.location.href = "index-alumno.html";
    }else if (x.value == "goku@alumnos.com" && y.value == "goku123") {
        window.location.href = "index-alumno.html";
    }else if (x.value == "javier@alumnos.com" && y.value == "javier123") {
        window.location.href = "index-alumno.html";
    }else if (x.value == "lizzy@alumnos.com" && y.value == "lizzy123") {
        window.location.href = "index-alumno.html";
    } else if (x.value == "francisco@profesores.com" && y.value == "francisco123") {
        window.location.href = "index-profesor.html";
    } else if (x.value == "joseantonio@profesores.com" && y.value == "joseantonio123") {
        window.location.href = "index-profesor.html";
    } 
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);
x.addEventListener("input",vaciadax);
y.addEventListener("input",vaciaday);


function vaciadax(){
    if (x.value==""){
        document.querySelector(".emailada").textContent="Por favor introduzca el correo electrónico";
        document.querySelector(".emailada").style.borderColor="red";
    } else if (x.value!=="alvaro@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "ermejildo@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "goku@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "javier@alumnos.com") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (x.value !== "lizzy@alumnos.com") {
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
    }  else if ( y.value!=="alvaro123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }  else if ( y.value !== "ermejildo123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }else if ( y.value !== "goku123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }else if ( y.value !== "javier123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }else if ( y.value !== "lizzy123") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if ( y.value !== "francisco") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    } else if (y.value !== "joseantonio") {
        document.querySelector(".emailada").textContent="Correo electrónico o contraseña incorrectos";
    }
}


let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
let ermejildada = "json/ermejildo.json";
  /* Importación de datos */
function cargarDatos(jsonada) {
  fetch(jsonada)
  .then(response => response.json())
    .then(data => {
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let actividada = plantilla.content.cloneNode(true);
        
        actividada.querySelector(".fecha").textContent = el.fecha;
        actividada.querySelector(".tipo").textContent = el.tipoPractica;
        actividada.querySelector(".totalHoras").textContent = el.totalHoras;
        actividada.querySelector(".actividad").textContent = el.actividadRealizada;
        actividada.querySelector(".observaciones").textContent = el.observacionesIncidencias;

        wrap.appendChild(actividada);       
        contenedor.appendChild(wrap);
        

      });
    })
    .catch(err => {
        alert("Hubo un error: " + err + ". Recargue la página.");
    });
  };
