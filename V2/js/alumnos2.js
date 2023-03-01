let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/alumnos-joseantonio.json")
  .then(response => response.json())
    .then(data => {
      let numeroElemento = 1;
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let nuevoAlumno = plantilla.content.cloneNode(true);
        
        nuevoAlumno.querySelector(".nombre").textContent = el.nombre;
        nuevoAlumno.querySelector(".apellidos").textContent = el.apellidos;
        nuevoAlumno.querySelector(".contrasena").textContent = el.contrasena;
        nuevoAlumno.querySelector(".dni").textContent = el.dni;
        nuevoAlumno.querySelector(".fechaNacimiento").textContent = el.fechaNacimiento;
        nuevoAlumno.querySelector(".email").textContent = el.email;
        nuevoAlumno.querySelector(".telefono").textContent = el.telefono;
        nuevoAlumno.querySelector(".empresa").textContent = el.empresa;
        nuevoAlumno.querySelector(".tutor").textContent = el.tutor;
        nuevoAlumno.querySelector(".horasDual").textContent = el.horasDual;
        nuevoAlumno.querySelector(".horasFCT").textContent = el.horasFCT;
        nuevoAlumno.querySelector(".observaciones").textContent = el.observaciones;

        wrap.appendChild(nuevoAlumno);
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