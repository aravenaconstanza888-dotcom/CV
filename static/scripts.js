//codigo javascript para activar el cambio de apariencia//

//paso 1 seleccionar los lemeentos del DOM//
//capturamos el body html en una variable//
const body = document.body;
const btntoggle = document.getElementById("btn-toggle-tema");
//paso 2 poner a javascript a supervisar el boton de apariencia//
//javascript va a estar atento (escuchando (listening)) a eventos sobre el boton apariencia//

btntoggle.addEventListener ("click", function () {
body.classList.toggle ("dark-mode"); 
});
// Evita que el formulario decorativo recargue la página
document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault();
});