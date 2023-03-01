let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/ermejildo.json")
  .then(response => response.json())
    .then(data => {
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let nuevaActividad = plantilla.content.cloneNode(true);
        
        nuevaActividad.querySelector(".fecha").textContent = el.fecha;
        nuevaActividad.querySelector(".tipo").textContent = el.tipoPractica;
        nuevaActividad.querySelector(".totalHoras").textContent = el.totalHoras;
        nuevaActividad.querySelector(".actividad").textContent = el.actividadRealizada;
        nuevaActividad.querySelector(".observaciones").textContent = el.observacionesIncidencias;

        wrap.appendChild(nuevaActividad);       
        contenedor.appendChild(wrap);
        

      });
    })
    .catch(err => {
        alert("Hubo un error: " + err + ". Recargue la página.");
    });
  };
  document.addEventListener("DOMContentLoaded",cargarDatos);

