let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/alvaro.json")
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

  document.addEventListener("DOMContentLoaded",cargarDatos);