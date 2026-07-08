var ventas = document.getElementById("ventas");
var fecha = document.getElementById("birthday");
var ingresos = document.getElementById("ingresos");
var engresos = document.getElementById("engresos");
var concepto = document.getElementById("concepto");
var valor = document.getElementById("valor");

function ValidarDatosContabilidad() {
    console.log(ventas);
    if(ventas.value != "" && fecha.value != "" && ingresos.value != "" && engresos.value != "" && concepto.value != "" && valor.value != "") {
        
        if( /[a-zA-Z]/.test(ventas.value)) {
            alert("El campo ventas no debe contener letras.");
        }

        if(/[a-zA-Z]/.test(ingresos.value)) {
    alert("El campo ingresos no debe contener letras.");
}

if(/[a-zA-Z]/.test(egresos.value)) {
    alert("El campo egresos no debe contener letras.");
}

if(/[a-zA-Z]/.test(valor.value)) {
    alert("El campo valor no debe contener letras.");
}

    } else {
        alert("Por favor, complete todos los campos.");
    }
}

document.getElementById("btnenviar").onclick = ValidarDatosContabilidad;