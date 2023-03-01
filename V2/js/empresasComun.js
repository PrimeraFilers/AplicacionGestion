let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");
  /* Importación de datos */
function cargarDatos() {
  fetch("json/empresas.json")
  .then(response => response.json())
    .then(data => {
      let numeroElemento = 1;
      data.forEach(function (el) {

        let wrap = document.createElement("tr");
        let nuevaEmpresa = plantilla.content.cloneNode(true);
        
        nuevaEmpresa.querySelector(".nombreEmpresa").textContent = el.nombre;
        nuevaEmpresa.querySelector(".telefono").textContent = el.telefono;
        nuevaEmpresa.querySelector(".email").textContent = el.email;
        nuevaEmpresa.querySelector(".responsable").textContent = el.responsable;
        nuevaEmpresa.querySelector(".observaciones").textContent = el.observaciones;
        
        wrap.appendChild(nuevaEmpresa);
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
      const newNombreEmpresa = document.querySelector("#nuevo_nombre_e").value;
      const newTelefonoEmpresa = document.querySelector("#nuevo_telefono_e").value;
      const newEmailEmpresa = document.querySelector("#nuevo_email_e").value;
      const newResponsable = document.querySelector("#nuevo_responsable_e").value;
      const newObservacionesEmpresa = document.querySelector("#nuevo_observaciones_e").value;

      if (newNombreEmpresa && newTelefonoEmpresa && newEmailEmpresa && newResponsable != "") {

        let wrap = document.createElement("tr");
  
        let nuevaEmpresa = plantilla.content.cloneNode(true);
    
        nuevaEmpresa.querySelector(".nombreEmpresa").textContent = newNombreEmpresa;
        nuevaEmpresa.querySelector(".telefono").textContent = newTelefonoEmpresa;
        nuevaEmpresa.querySelector(".email").textContent = newEmailEmpresa;
        nuevaEmpresa.querySelector(".responsable").textContent = newResponsable;
        nuevaEmpresa.querySelector(".observaciones").textContent = newObservacionesEmpresa;
    
        wrap.appendChild(nuevaEmpresa);       
        contenedor.appendChild(wrap);

        document.querySelector("#nuevo_nombre_e").value = "";
        document.querySelector("#nuevo_telefono_e").value = "";
        document.querySelector("#nuevo_email_e").value = "";
        document.querySelector("#nuevo_responsable_e").value = "";
        document.querySelector("#nuevo_observaciones_e").value = "";

      }
    });
  