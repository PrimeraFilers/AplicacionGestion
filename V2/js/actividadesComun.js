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

        document.querySelector("#new_ac_fecha").value = "";
        document.querySelector("#new_ac_tipo").value = "";
        document.querySelector("#new_ac_hora").value = "";
        document.querySelector("#new_ac_actividad").value = "";
        document.querySelector("#new_ac_obs").value = "";

      }
    });