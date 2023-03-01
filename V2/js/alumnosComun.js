  /* Insercion de datos */
  const botonInsert = document.querySelector(".add");
  const form = document.querySelector('#insertValues');

  botonInsert.addEventListener("click", () => {
  
      // Se obtienen los datos de las celdas rellenadas
      const newNombre = document.querySelector("#new_nombreA").value;
      const newApellidos = document.querySelector("#new_apellidosA").value;
      const newContrasena = document.querySelector("#new_contrasenaA").value;
      const newDNI = document.querySelector("#new_dniA").value;
      const newFechaNacimiento = document.querySelector("#new_fechaA").value;
      const newEmail = document.querySelector("#new_emailA").value;
      const newTelefono = document.querySelector("#new_telefonoA").value;
      const newEmpresa = document.querySelector("#new_empresaA").value;
      const newTutor = document.querySelector("#new_tutorA").value;
      const newDual = document.querySelector("#new_dualA").value;
      const newFCT = document.querySelector("#new_fctA").value;
      const newObservaciones = document.querySelector("#new_observacionesA").value;

      if (newNombre && newApellidos && newContrasena && newDNI && newFechaNacimiento && newEmail && newTelefono && newEmpresa && newTutor && newDual && newFCT != "") {

        let wrap = document.createElement("tr");
  
        let nuevoAlumno = plantilla.content.cloneNode(true);
    
        nuevoAlumno.querySelector(".nombre").textContent = newNombre;
        nuevoAlumno.querySelector(".apellidos").textContent = newApellidos;
        nuevoAlumno.querySelector(".contrasena").textContent = newContrasena;
        nuevoAlumno.querySelector(".dni").textContent = newDNI;
        nuevoAlumno.querySelector(".fechaNacimiento").textContent = newFechaNacimiento;
        nuevoAlumno.querySelector(".email").textContent = newEmail;
        nuevoAlumno.querySelector(".telefono").textContent = newTelefono;
        nuevoAlumno.querySelector(".empresa").textContent = newEmpresa;
        nuevoAlumno.querySelector(".tutor").textContent = newTutor;
        nuevoAlumno.querySelector(".horasDual").textContent = newDual;
        nuevoAlumno.querySelector(".horasFCT").textContent = newFCT;
        nuevoAlumno.querySelector(".observaciones").textContent = newObservaciones;
    
    
        wrap.appendChild(nuevoAlumno);       
        contenedor.appendChild(wrap);

      }
    });
  