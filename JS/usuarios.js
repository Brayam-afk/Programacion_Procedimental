
var nombre = document.getElementById("nombre").value;


var direccion = document.getElementById("direccion");

var correo = document.getElementById("correo");
var contraseña = document.getElementById("contraseña");
var nacimiento = document.getElementById("birthday");
var documento = document.getElementById("documento");
var profesion = document.getElementById("profesion");

function ValidarDatos() {
    if (nombre.value != "" && direccion.value != "" && correo.value != "" && contraseña.value != "" && nacimiento.value != "" && documento.value != "" && profesion.value != "") {

        if (/\d/.test(nombre.value)) {
            alert("El nombre  no debe contener números.");
        }

        if (correo.value.indexOf("@") === -1) {
            alert("El correo debe contener @.");
        }

        if (contraseña.value.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
        }

        if (!/^\d+$/.test(documento.value)) {
            alert("El documento debe contener solo números.");
        }

    } else {
        alert("Por favor, complete todos los campos.");
    }
}












