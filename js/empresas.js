function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline";
	
 var nombre_e=document.getElementById("nombre_empresa_row"+no);
 var telefono_e=document.getElementById("telefono_empresa_row"+no);
 var email_e=document.getElementById("email_empresa_row"+no);
 var responsable_e=document.getElementById("responsable_empresa_row"+no);
 var observaciones_e=document.getElementById("observaciones_empresa_row"+no);
	
 var nombre_e_data=nombre_e.innerHTML;
 var telefono_e_data=telefono_e.innerHTML;
 var email_e_data=email_e.innerHTML;
 var responsable_e_data=responsable_e.innerHTML;
 var observaciones_e_data=observaciones_e.innerHTML;
	
 nombre_e.innerHTML="<input class='littleInput' type='text' id='nombre_e_text"+no+"' value='"+nombre_e_data+"'>";
 telefono_e.innerHTML="<input class='littleInput' type='text' id='telefono_e_text"+no+"' value='"+ telefono_e_data+"'>";
 email_e.innerHTML="<input class='littleInput' type='text' id='email_e_text"+no+"' value='"+email_e_data+"'>";
 responsable_e.innerHTML="<input class='littleInput' type='text' id='responsable_e_text"+no+"' value='"+responsable_e_data+"'>";
 observaciones_e.innerHTML="<input class='littleInput' type='text' id='observaciones_e_text"+no+"' value='"+observaciones_e_data+"'>";
}

function save_row(no)
{
 var nombre_e_val=document.getElementById("nombre_e_text"+no).value;
 var telefono_e_val=document.getElementById("telefono_e_text"+no).value;
 var email_e_val=document.getElementById("email_e_text"+no).value;
 var responsable_e_val=document.getElementById("responsable_e_text"+no).value;
 var observaciones_e_val=document.getElementById("observaciones_e_text"+no).value;

 document.getElementById("nombre_empresa_row"+no).innerHTML=nombre_e_val;
 document.getElementById("telefono_empresa_row"+no).innerHTML=telefono_e_val;
 document.getElementById("email_empresa_row"+no).innerHTML=email_e_val;
 document.getElementById("responsable_empresa_row"+no).innerHTML=responsable_e_val;
 document.getElementById("observaciones_empresa_row"+no).innerHTML=observaciones_e_val;

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var nuevo_nombre_e=document.getElementById("nuevo_nombre_e").value;
 var nuevo_telefono_e=document.getElementById("nuevo_telefono_e").value;
 var nuevo_email_e=document.getElementById("nuevo_email_e").value;
 var nuevo_responsable_e=document.getElementById("nuevo_responsable_e").value;
 var nuevo_observaciones_e=document.getElementById("nuevo_observaciones_e").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nombre_empresa_row"+table_len+"'>"+nuevo_nombre_e+"</td><td id='telefono_empresa_row"+table_len+"'>"+nuevo_telefono_e+"</td><td id='email_empresa_row"+table_len+"'>"+nuevo_email_e+"</td><td id='responsable_empresa_row"+table_len+"'>"+nuevo_responsable_e+"</td><td id='observaciones_empresa_row"+table_len+"'>"+nuevo_observaciones_e+"</td><td><input type='button' id='edit_button"+table_len+"' value='Editar' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Guardar' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Borrar' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("nuevo_nombre_e").value="";
 document.getElementById("nuevo_telefono_e").value="";
 document.getElementById("nuevo_email_e").value="";
 document.getElementById("nuevo_responsable_e").value="";
 document.getElementById("nuevo_observaciones_e").value="";
}

$("#editableTable").find("a[title='Delete']").click(function(e){  
  var x;
    if (confirm("Are you sure you want to delete entire row?") == true) {
        $(this).closest("tr").remove();
    } else {
        
    }     
});