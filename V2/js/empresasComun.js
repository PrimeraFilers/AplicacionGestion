  /* Insercion de datos */
  const botonInsert = document.querySelector(".add");
  const form = document.querySelector('#insertValues');

  botonInsert.addEventListener("click", () => {
  
      // Se obtienen los datos de las celdas rellenadas
      const newNombreEmpresa = document.querySelector("#nuevo_nombre_e").value;
      const newTelefonoEmpresa = document.querySelector("#nuevo_telefono_e").value;
      const newEmailEmpresa = document.querySelector("#nuevo_email_e").value;
      const newResponsable = document.querySelector("#nuevo_responsable_e").value;
      const newObservacionesEmpresa = document.querySelector("#nuevo_observaciones_e").value;

      if (newNombreEmpresa && newTelefonoEmpresa && newEmailEmpresa && newResponsable != "") {

        let wrap = document.createElement("tr");
  
        let nuevaActividad = plantilla.content.cloneNode(true);
    
        nuevaActividad.querySelector(".nombreEmpresa").textContent = newNombreEmpresa;
        nuevaActividad.querySelector(".telefono").textContent = newTelefonoEmpresa;
        nuevaActividad.querySelector(".email").textContent = newEmailEmpresa;
        nuevaActividad.querySelector(".responsable").textContent = newResponsable;
        nuevaActividad.querySelector(".observaciones").textContent = newObservacionesEmpresa;
    
        wrap.appendChild(nuevaActividad);       
        contenedor.appendChild(wrap);

      }
    });
  