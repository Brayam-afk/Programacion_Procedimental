var correoc = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
function ValidarDatosContacto() {
    if (correoc.value != "" && mensaje.value != "") {
        if (/\d/.test(correoc.value)) {
            alert("El campo correo no debe contener números.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}