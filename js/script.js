function validarFormularioLogin(){

var correo,mail,expresion,aceptar;

correo = document.getElementById("txtCorreo").value;
expresion = /\w+@+\w+\.+[a-zA-Z]{2,4}/;

if(correo === ""){
alert("Debera de ingresar su cuenta de correo");
}
 


}