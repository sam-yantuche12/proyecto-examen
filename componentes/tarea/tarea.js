import { obtenerTareas, actualizarTareas } from "../../Control/miLocalStorage.js";

export function crearTarea(tarea, index) {
  const div = document.createElement("div");
  div.classList.add("tarea");

  // Texto de la tarea
  const texto = document.createElement("span");
  texto.textContent = tarea.texto;

  // Checkbox de completada
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = tarea.completada;

  check.addEventListener("change", () => {
    const tareas = obtenerTareas();
    tareas[index].completada = check.checked;
    actualizarTareas(tareas);
  });

  // Botón eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "❌";
  botonEliminar.classList.add("btn-eliminar");

  botonEliminar.addEventListener("click", () => {
    let tareas = obtenerTareas();
    tareas.splice(index, 1); // elimina esa tarea
    actualizarTareas(tareas);

    // refresca la vista
    div.remove();
  });

  div.appendChild(texto);
  div.appendChild(check);
  div.appendChild(botonEliminar);

  return div;
}