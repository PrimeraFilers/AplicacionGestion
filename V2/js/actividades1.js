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
  const botonInsert = document.querySelector(".add");
  const form = document.querySelector('#insertValues');

  botonInsert.addEventListener("click", () => {
  
      // Se obtienen los datos de las celdas rellenadas
      const newFecha = document.querySelector("#new_ac_fecha").value;
      const newTipo = document.querySelector("#new_ac_tipo").value;
      const newHoras = document.querySelector("#new_ac_hora").value;
      const newActividad = document.querySelector("#new_ac_actividad").value;
      const newObservacion = document.querySelector("#new_ac_obs").value;

      if (newFecha && newTipo && newHoras && newActividad != "") {

        let wrap = document.createElement("tr");
  
        let nuevaActividad = plantilla.content.cloneNode(true);
    
        nuevaActividad.querySelector(".fecha").textContent = newFecha;
        nuevaActividad.querySelector(".tipo").textContent = newTipo;
        nuevaActividad.querySelector(".totalHoras").textContent = newHoras;
        nuevaActividad.querySelector(".actividad").textContent = newActividad;
        nuevaActividad.querySelector(".observaciones").textContent = newObservacion;
    
        wrap.appendChild(nuevaActividad);       
        contenedor.appendChild(wrap);

      }
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