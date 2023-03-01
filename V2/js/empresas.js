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