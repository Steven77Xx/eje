function validar(){
var form = document.form;
if(form.nombre.value==0){
alert("El campo nombre esta vacio")
form.nombre.value="";
form.nombre.focus();
return false;
    }
if(form.documento.value==0){
 alert("El campo documento esta vacio")
 form.documento.value="";
 form.documento.focus();
return false;
    }
if(form.telefono.value==0){
 alert("El campo teléfono esta vacio")
form.telefono.value="";
form.telefono.focus();
return false;
        }
if(form.correo.value==0){
 alert("El campo Correo esta vacio")
 form.correo.value="";
 form.correo.focus();
return false;
            }
}

function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
		document.getElementById('name').value="";
		document.getElementById('comment').value="";

	}
 
}