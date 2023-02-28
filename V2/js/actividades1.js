let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/alvaro.json")
  .then(response => response.json())
    .then(data => {
      let numeroElemento = 1;
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let actividada = plantilla.content.cloneNode(true);
        
        actividada.querySelector(".fecha").textContent = el.fecha;
        actividada.querySelector(".tipo").textContent = el.tipoPractica;
        actividada.querySelector(".totalHoras").textContent = el.totalHoras;
        actividada.querySelector(".actividad").textContent = el.actividadRealizada;
        actividada.querySelector(".observaciones").textContent = el.observacionesIncidencias;

        wrap.appendChild(actividada);
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
  const botonInsert = document.querySelector(".insert");
  const form = document.querySelector('#insertValues');

  botonInsert.addEventListener("click", () => {
    form.addEventListener('submit', event => {
  
      // Se obtienen los datos de las celdas rellenadas
      const newDate = document.querySelector(".newDate").value;
      const newTraining = document.querySelector(".newTraining").value;
      const newTime = document.querySelector(".newTime").value;
      const newActivity = document.querySelector(".newActivity").value;
      const newObservation = document.querySelector(".newObservation").value;

      if (newDate && newTraining && newTime && newActivity != "") {

        let wrap = document.createElement("tr");
  
        let nuevaActividad = plantilla.content.cloneNode(true);
    
        nuevaActividad.querySelector(".fecha").textContent = newDate;
        nuevaActividad.querySelector(".tipo").textContent = newTraining;
        nuevaActividad.querySelector(".totalHoras").textContent = newTime;
        nuevaActividad.querySelector(".actividad").textContent = newActivity;
        nuevaActividad.querySelector(".observaciones").textContent = newObservation;
    
        wrap.appendChild(nuevaActividad);       
        contenedor.appendChild(wrap);

      }
  
    });
  });
  
  /* Edicion de datos */  
  

  /* Eliminacion de datos */
  const buttonsDelete = document.querySelectorAll(".delete");
  buttonsDelete.forEach(function(boton) {
    boton.addEventListener("click", function() {
      let fila = this.closest("tr");
      fila.remove();
    });
  });
  
