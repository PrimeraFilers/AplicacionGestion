let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/alumnos-francisco.json")
  .then(response => response.json())
    .then(data => {
      let numeroElemento = 1;
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let alumnos = plantilla.content.cloneNode(true);
        
        alumnos.querySelector(".nombre").textContent = el.nombre;
        alumnos.querySelector(".apellidos").textContent = el.apellidos;
        alumnos.querySelector(".contrasena").textContent = el.contrasena;
        alumnos.querySelector(".dni").textContent = el.dni;
        alumnos.querySelector(".fechaNacimiento").textContent = el.fechaNacimiento;
        alumnos.querySelector(".email").textContent = el.email;
        alumnos.querySelector(".telefono").textContent = el.telefono;
        alumnos.querySelector(".empresa").textContent = el.empresa;
        alumnos.querySelector(".tutor").textContent = el.tutor;
        alumnos.querySelector(".horasDual").textContent = el.horasDual;
        alumnos.querySelector(".horasFCT").textContent = el.horasFCT;
        alumnos.querySelector(".observaciones").textContent = el.observaciones;

        wrap.appendChild(alumnos);
        wrap.classList.add(numeroElemento);
        numeroElemento++; 
        contenedor.appendChild(wrap);

      });
    })
    .catch(err => {
        alert("Hubo un error: " + err + ". Recargue la página.");
    });
  };

  document.addEventListener("DOMContentLoaded", cargarDatos);