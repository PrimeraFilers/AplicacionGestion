function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "inline";

    var nombreA = document.getElementById("nombreA" + no);
    var apellidosA = document.getElementById("apellidosA" + no);
    var contrasenaA = document.getElementById("contrasenaA" + no);
    var dniA = document.getElementById("dniA" + no);
    var fechaA = document.getElementById("fechaA" + no);
    var emailA = document.getElementById("emailA" + no);
    var telefonoA = document.getElementById("telefonoA" + no);
    var empresaA = document.getElementById("empresaA" + no);
    var tutorA = document.getElementById("tutorA" + no);
    var dualA = document.getElementById("dualA" + no);
    var fctA = document.getElementById("fctA" + no);
    var observacionesA = document.getElementById("observacionesA" + no);

    var nombreA_data = nombreA.innerHTML;
    var apellidosA_data = apellidosA.innerHTML;
    var contrasenaA_data = contrasenaA.innerHTML;
    var dniA_data = dniA.innerHTML;
    var fechaA_data = fechaA.innerHTML;
    var emailA_data = emailA.innerHTML;
    var telefonoA_data = telefonoA.innerHTML;
    var empresaA_data = empresaA.innerHTML;
    var tutorA_data = tutorA.innerHTML;
    var dualA_data = dualA.innerHTML;
    var fctA_data = fctA.innerHTML;
    var observacionesA_data = observacionesA.innerHTML;

    nombreA.innerHTML = "<input class='littleInput' type='text' id='nombreA_text" + no + "' value='" + nombreA_data + "'>";
    apellidosA.innerHTML = "<input class='littleInput' type='text' id='apellidosA_text" + no + "' value='" + apellidosA_data + "'>";
    contrasenaA.innerHTML = "<input class='littleInput' type='text' id='contrasenaA_text" + no + "' value='" + contrasenaA_data + "'>";
    dniA.innerHTML = "<input class='littleInput' type='text' id='dniA_text" + no + "' value='" + dniA_data + "'>";
    fechaA.innerHTML = "<input class='littleInput' type='text' id='fechaA_text" + no + "' value='" + fechaA_data + "'>";
    emailA.innerHTML = "<input class='littleInput' type='text' id='emailA_text" + no + "' value='" + emailA_data + "'>";
    telefonoA.innerHTML = "<input class='littleInput' type='text' id='telefonoA_text" + no + "' value='" + telefonoA_data + "'>";
    empresaA.innerHTML = "<input class='littleInput' type='text' id='empresaA_text" + no + "' value='" + empresaA_data + "'>";
    tutorA.innerHTML = "<input class='littleInput' type='text' id='tutorA_text" + no + "' value='" + tutorA_data + "'>";
    dualA.innerHTML = "<input class='littleInput' type='text' id='dualA_text" + no + "' value='" + dualA_data + "'>";
    fctA.innerHTML = "<input class='littleInput' type='text' id='fctA_text" + no + "' value='" + fctA_data + "'>";
    observacionesA.innerHTML = "<input class='littleInput' type='text' id='observacionesA_text" + no + "' value='" + observacionesA_data + "'>";
}

function save_row(no) {
    var nombreA_val = document.getElementById("nombreA_text" + no).value;
    var apellidosA_val = document.getElementById("apellidosA_text" + no).value;
    var contrasenaA_val = document.getElementById("contrasenaA_text" + no).value;
    var dniA_val = document.getElementById("dniA_text" + no).value;
    var fechaA_val = document.getElementById("fechaA_text" + no).value;
    var emailA_val = document.getElementById("emailA_text" + no).value;
    var telefonoA_val = document.getElementById("telefonoA_text" + no).value;
    var empresaA_val = document.getElementById("empresaA_text" + no).value;
    var tutorA_val = document.getElementById("tutorA_text" + no).value;
    var dualA_val = document.getElementById("dualA_text" + no).value;
    var fctA_val = document.getElementById("fctA_text" + no).value;
    var observacionesA_val = document.getElementById("observacionesA_text" + no).value;
    document.getElementById("save_button"+no).style.display="none";

    document.getElementById("nombreA" + no).innerHTML = nombreA_val;
    document.getElementById("apellidosA" + no).innerHTML = apellidosA_val;
    document.getElementById("contrasenaA" + no).innerHTML = contrasenaA_val;
    document.getElementById("dniA" + no).innerHTML = dniA_val;
    document.getElementById("fechaA" + no).innerHTML = fechaA_val;
    document.getElementById("emailA" + no).innerHTML = emailA_val;
    document.getElementById("telefonoA" + no).innerHTML = telefonoA_val;
    document.getElementById("empresaA" + no).innerHTML = empresaA_val;
    document.getElementById("tutorA" + no).innerHTML = tutorA_val;
    document.getElementById("dualA" + no).innerHTML = dualA_val;
    document.getElementById("fctA" + no).innerHTML = fctA_val;
    document.getElementById("observacionesA" + no).innerHTML = observacionesA_val;

    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_nombreA = document.getElementById("new_nombreA").value;
    var new_apellidosA = document.getElementById("new_apellidosA").value;
    var new_contrasenaA = document.getElementById("new_contrasenaA").value;
    var new_dniA = document.getElementById("new_dniA").value;
    var new_fechaA = document.getElementById("new_fechaA").value;
    var new_emailA = document.getElementById("new_emailA").value;
    var new_telefonoA = document.getElementById("new_telefonoA").value;
    var new_empresaA = document.getElementById("new_empresaA").value;
    var new_tutorA = document.getElementById("new_tutorA").value;
    var new_dualA = document.getElementById("new_dualA").value;
    var new_fctA = document.getElementById("new_fctA").value;
    var new_observacionesA = document.getElementById("new_observacionesA").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nombreA" + table_len + "'>" + new_nombreA + "</td><td id='apellidosA" + table_len + "'>" + new_apellidosA + "</td><td id='contrasenaA" + table_len + "'>" + new_contrasenaA + "</td><td id='dniA" + table_len + "'>" + new_dniA + "</td><td id='fechaA" + table_len + "'>" + new_fechaA + "</td><td id='emailA" + table_len + "'>" + new_emailA + "</td><td id='telefonoA" + table_len + "'>" + new_telefonoA + "</td><td id='empresaA" + table_len + "'>" + new_empresaA + "</td><td id='tutorA" + table_len + "'>" + new_tutorA + "</td><td id='dualA" + table_len + "'>" + new_dualA + "</td><td id='fctA" + table_len + "'>" + new_fctA + "</td><td id='observacionesA" + table_len + "'>" + new_observacionesA + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_nombreA").value = "";
    document.getElementById("new_apellidosA").value = "";
    document.getElementById("new_contrasenaA").value = "";
    document.getElementById("new_dniA").value = "";
    document.getElementById("new_fechaA").value = "";
    document.getElementById("new_emailA").value = "";
    document.getElementById("new_telefonoA").value = "";
    document.getElementById("new_empresaA").value = "";
    document.getElementById("new_tutorA").value = "";
    document.getElementById("new_dualA").value = "";
    document.getElementById("new_fctA").value = "";
    document.getElementById("new_observacionesA").value = "";
}