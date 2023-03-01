let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/profesores.json")
  .then(response => response.json())
    .then(data => {
      let numeroElemento = 1;
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let profesores = plantilla.content.cloneNode(true);
        
        profesores.querySelector(".nombre").textContent = el.nombre;
        profesores.querySelector(".apellidos").textContent = el.apellidos;
        profesores.querySelector(".contrasena").textContent = el.contrasena;
        profesores.querySelector(".email").textContent = el.email;

        wrap.appendChild(profesores);
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
  
  /* Insercion de datos */
  const botonInsert = document.querySelector(".add");
  const form = document.querySelector('#insertValues');

  botonInsert.addEventListener("click", () => {
  
      // Se obtienen los datos de las celdas rellenadas
      const newNombre = document.querySelector("#new_nombreAlumnoTP").value;
      const newApellidos = document.querySelector("#new_apellidosTP").value;
      const newContrasena = document.querySelector("#new_passwordTP").value;
      const newEmail = document.querySelector("#new_emailTP").value;

      if (newNombre && newApellidos && newContrasena && newEmail != "") {

        let wrap = document.createElement("tr");
  
        let nuevaActividad = plantilla.content.cloneNode(true);
    
        nuevaActividad.querySelector(".nombre").textContent = newNombre;
        nuevaActividad.querySelector(".apellidos").textContent = newApellidos;
        nuevaActividad.querySelector(".contrasena").textContent = newContrasena;
        nuevaActividad.querySelector(".email").textContent = newEmail;
    
        wrap.appendChild(nuevaActividad);       
        contenedor.appendChild(wrap);

      }
    });
  