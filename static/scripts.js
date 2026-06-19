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
// --- FORMULARIO DE CONTACTO ---
// Captura el formulario de contacto y la zona donde se muestra la alerta
const formContacto = document.getElementById("form-contacto");
const contactoAlerta = document.getElementById("contacto-alerta");

formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que la página se recargue
    evento.stopPropagation(); // evita que dispare el listener genérico de "form" de arriba

    // Validación nativa de Bootstrap: revisa los campos "required"
    if (!formContacto.checkValidity()) {
        formContacto.classList.add("was-validated");
        return;
    }

    // Si los campos son válidos, mostramos una alerta de éxito de Bootstrap
    contactoAlerta.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            ¡Gracias! Tu mensaje fue enviado correctamente, te contactaré pronto.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Limpiamos el formulario y quitamos las marcas de validación
    formContacto.reset();
    formContacto.classList.remove("was-validated");
});