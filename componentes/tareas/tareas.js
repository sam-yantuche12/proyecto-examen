import { miLocalStorage } from "../../control/miLocalStorage.js";
import { crearTareaElemento } from "../tarea/tarea.js";

export function renderTareas() {
  const tareasSection = document.getElementById("tareas");
  tareasSection.innerHTML = "";

  const tareas = miLocalStorage.obtenerTareas();

  tareas.forEach((tarea) => {
    const tareaDiv = crearTareaElemento(tarea, (t) => {
      miLocalStorage.eliminarTarea(t);
    });
    tareasSection.appendChild(tareaDiv);
  });
}
