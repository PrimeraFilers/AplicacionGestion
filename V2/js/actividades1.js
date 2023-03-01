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

    const tablaContainer = document.getElementById("tabla-container");
  
  /* Edicion de datos */  
  tablaContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit")) {
      let fila = event.target.closest("tr");
      let celdas = fila.querySelectorAll("td");
      celdas.forEach(function(celda, index) {
        if (index < celdas.length - 1) { // Evitar que el último botón se edite
          let contenidoAnterior = celda.innerHTML;
          celda.innerHTML = `<input type="text" value="${contenidoAnterior}">`;
        }
      });
      fila.classList.add("editing");
      let botonGuardar = fila.querySelector(".save");
      botonGuardar.style.display = "inline-block";
    } else if (event.target.classList.contains("save")) {
      let fila = event.target.closest("tr");
      let celdas = fila.querySelectorAll("td");
      celdas.forEach(function(celda, index) {
        if (index < celdas.length - 1) { // Evitar que el último botón se edite
          let input = celda.querySelector("input");
          celda.innerHTML = input.value;
        }
      });
      fila.classList.remove("editing");
      let botonGuardar = fila.querySelector(".save");
      botonGuardar.style.display = "none";
    }
  });

  /* Eliminacion de datos */

  tablaContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
      let fila = event.target.closest("tr");
      fila.remove();
    }
  });