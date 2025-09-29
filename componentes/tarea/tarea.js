export function crearTareaElemento(tarea, eliminarCallback) {
  const div = document.createElement("div");
  div.classList.add("tarea");
  div.textContent = tarea;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    eliminarCallback(tarea);
    div.remove();
  });

  div.appendChild(btnEliminar);
  return div;
}
