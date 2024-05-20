console.log ("Holaaa mundo");

var input_nombre = document.getElementById("nombre");
var input_edad = document.getElementById("edad");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");

console.log(input_nombre);
console.log(input_edad);
console.log(input_email);
console.log(input_submit);




input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event){
event.preventDefault();

var valor_nombre = input_nombre.value;
var valor_edad = input_edad.value;
var valor_email = input_email.value;
var valor_submit = input_submit.value;

console.log(valor_nombre);
console.log(valor_edad);
console.log(valor_email);
console.log(valor_submit);


var placeholder_nombre = document.getElementById("nombre-placeholder");
var placeholder_email = document.getElementById("email-placeholder");

placeholder_nombre.innerHTML = valor_nombre;
placeholder_email.innerHTML = valor_email;

elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");

elemento_formulario = document.getElementById("formulario");
elemento_formulario.classList.add("oculto");


}
