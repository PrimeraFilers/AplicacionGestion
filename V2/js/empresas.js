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
        let empresas = plantilla.content.cloneNode(true);
        
        empresas.querySelector(".nombreEmpresa").textContent = el.nombre;
        empresas.querySelector(".telefono").textContent = el.telefono;
        empresas.querySelector(".email").textContent = el.email;
        empresas.querySelector(".responsable").textContent = el.responsable;
        empresas.querySelector(".observaciones").textContent = el.observaciones;
        
        wrap.appendChild(empresas);
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