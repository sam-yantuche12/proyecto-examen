const app = document.getElementById("app");

// Crear contenedor
const formContainer = document.createElement("div");
formContainer.classList.add("formulario");

// Input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Nombre de la tarea";

// Botón
const btnAgregar = document.createElement("button");
btnAgregar.textContent = "Agregar";

// Agregar al contenedor
formContainer.appendChild(input);
formContainer.appendChild(btnAgregar);
app.appendChild(formContainer);

// Evento para agregar tarea
btnAgregar.addEventListener("click", () => {
if(input.value.trim() !== ""){
agregarTarea(input.value);
input.value = "";
}
});