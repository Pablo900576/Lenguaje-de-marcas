const colores = ["rojo", "azul", "verde", "amarillo"];
var consola;
var jugador;
const botones = document.querySelectorall("colores");
const botonEmpezar = document.getElementById("empezar");
function mostrarReglas() {
    document.getElementById('contenedorReglas').style.display = 'block';
}



function ocultarReglas() {
    document.getElementById('contenedorReglas').style.display = 'none';
}