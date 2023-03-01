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