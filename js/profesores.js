function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var nombreAlumnoTP=document.getElementById("nombreAlumnoTP_row"+no);
 var apellidosTP=document.getElementById("apellidosTP_row"+no);
 var passwordTP=document.getElementById("passwordTP_row"+no);
 var emailTP=document.getElementById("emailTP_row"+no);
	
 var nombreAlumnoTP_data=nombreAlumnoTP.innerHTML;
 var apellidosTP_data=apellidosTP.innerHTML;
 var passwordTP_data=passwordTP.innerHTML;
 var emailTP_data=emailTP.innerHTML;
	
 nombreAlumnoTP.innerHTML="<input type='text' id='nombreAlumnoTP_text"+no+"' value='"+nombreAlumnoTP_data+"'>";
 apellidosTP.innerHTML="<input type='text' id='apellidosTP_text"+no+"' value='"+apellidosTP_data+"'>";
 passwordTP.innerHTML="<input type='text' id='passwordTP_text"+no+"' value='"+passwordTP_data+"'>";
 emailTP.innerHTML="<input type='text' id='emailTP_text"+no+"' value='"+emailTP_data+"'>";
}

function save_row(no)
{
 var nombreAlumnoTP_val=document.getElementById("nombreAlumnoTP_text"+no).value;
 var apellidosTP_val=document.getElementById("apellidosTP_text"+no).value;
 var passwordTP_val=document.getElementById("passwordTP_text"+no).value;
 var emailTP_val=document.getElementById("emailTP_text"+no).value;

 document.getElementById("nombreAlumnoTP_row"+no).innerHTML=nombreAlumnoTP_val;
 document.getElementById("apellidosTP_row"+no).innerHTML=apellidosTP_val;
 document.getElementById("passwordTP_row"+no).innerHTML=passwordTP_val;
 document.getElementById("emailTP_row"+no).innerHTML=emailTP_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_nombreAlumnoTP=document.getElementById("new_nombreAlumnoTP").value;
 var new_apellidosTP=document.getElementById("new_apellidosTP").value;
 var new_passwordTP=document.getElementById("new_passwordTP").value;
 var new_emailTP=document.getElementById("new_emailTP").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nombreAlumnoTP_row"+table_len+"'>"+new_nombreAlumnoTP+"</td><td id='apellidosTP_row"+table_len+"'>"+new_apellidosTP+"</td><td id='passwordTP_row"+table_len+"'>"+new_passwordTP+"</td><td id='emailTP_row"+table_len+"'>"+new_emailTP+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_nombreAlumnoTP").value="";
 document.getElementById("new_apellidosTP").value="";
 document.getElementById("new_passwordTP").value="";
 document.getElementById("new_emailTP").value="";

}