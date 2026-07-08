var producto = document.getElementById("producto");
var direccion = document.getElementById("direccion");
var nombre = document.getElementById("nombre_usuario");
var cantidad = document.getElementById("cantidad");
var pago = document.getElementById("metodo_pago");
var telefono = document.getElementById("telefono");

function ValidarDatosPedido() {
    console.log(producto);
    if (producto.value != "" && direccion.value != "" && nombre.value != "" && cantidad.value != "" && pago.value != "" && telefono.value != "")

        if (/[a-zA-Z]/.test(cantidad.value)) {
               Swal.fire({
  icon: "error",
  title: "Algo Salio Mal...",
  text: "El campo cantidad no debe contener letras.",
  
});
        }
        if (/[a-zA-Z]/.test(telefono.value)) {
             Swal.fire({
  icon: "error",
  title: "Algo Salio Mal...",
  text: "El campo telefono no debe contener letras.",
  
});
        }
        if (/[a-zA-Z]/.test(nombre_usuario.value)) {
           Swal.fire({
  icon: "error",
  title: "Algo Salio Mal...",
  text: "El campo nombre no debe contener números.",
  
});
     
    } else {
          Swal.fire({
  title: "Algo Salio Mal...",
  text: "Por favor, complete todos los campos.",
  icon: "error"
});     
    }
} 

document.getElementById("btnenviar").onclick = ValidarDatosPedido;