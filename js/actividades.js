function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline";
	
 var fecha=document.getElementById("ac_fecha_row"+no);
 var tipo=document.getElementById("ac_tipo_row"+no);
 var hora=document.getElementById("ac_hora_row"+no);
 var actividad=document.getElementById("ac_actividad_row"+no);
 var obs=document.getElementById("ac_obs_row"+no);
	
 var fecha_data=fecha.innerHTML;
 var tipo_data=tipo.innerHTML;
 var hora_data=hora.innerHTML;
 var actividad_data=actividad.innerHTML;
 var obs_data=obs.innerHTML;
	
 fecha.innerHTML="<input type='text' id='fecha_text"+no+"' value='"+fecha_data+"'>";
 tipo.innerHTML="<input type='text' id='tipo_text"+no+"' value='"+tipo_data+"'>";
 hora.innerHTML="<input type='text' id='hora_text"+no+"' value='"+hora_data+"'>";
 actividad.innerHTML="<input type='text' id='actividad_text"+no+"' value='"+actividad_data+"'>";
 obs.innerHTML="<input type='text' id='obs_text"+no+"' value='"+obs_data+"'>";
}

function save_row(no)
{
 var fecha_val=document.getElementById("fecha_text"+no).value;
 var tipo_val=document.getElementById("tipo_text"+no).value;
 var hora_val=document.getElementById("hora_text"+no).value;
 var actividad_val=document.getElementById("actividad_text"+no).value;
 var obs_val=document.getElementById("obs_text"+no).value ;

 document.getElementById("ac_fecha_row"+no).innerHTML=fecha_val;
 document.getElementById("ac_tipo_row"+no).innerHTML=tipo_val;
 document.getElementById("ac_hora_row"+no).innerHTML=hora_val;
 document.getElementById("ac_actividad_row"+no).innerHTML=actividad_val;
 document.getElementById("ac_obs_row"+no).innerHTML=obs_val;

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_fecha=document.getElementById("new_ac_fecha").value;
 var new_tipo=document.getElementById("new_ac_tipo").value;
 var new_hora=document.getElementById("new_ac_hora").value;
 var new_actividad=document.getElementById("new_ac_actividad").value;
 var new_obs=document.getElementById("new_ac_obs").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='ac_fecha_row"+table_len+"'>"+new_fecha+"</td><td id='ac_tipo_row"+table_len+"'>"+new_tipo+"</td><td id='ac_hora_row"+table_len+"'>"+new_hora+"</td><td id='ac_actividad_row"+table_len+"'>"+new_actividad+"</td><td id='ac_obs_row"+table_len+"'>"+new_obs+"</td><td><input type='button' id='edit_button"+table_len+"' value='Editar' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Guardar' class='save' onclick='save_row("+table_len+")'><input type='button' value='Borrar' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_ac_fecha").value="";
 document.getElementById("new_ac_tipo").value="";
 document.getElementById("new_ac_hora").value="";
 document.getElementById("new_ac_actividad").value="";
 document.getElementById("new_ac_obs").value="";
}