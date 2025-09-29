import { obtenerTareas } from "../../Control/miLocalStorage.js";
import { crearTarea } from "../Tarea/tarea.js";

export function mostrarTareas(contenedor) {
  contenedor.innerHTML = "";
  const tareas = obtenerTareas();

  tareas.forEach((tarea, index) => {
    contenedor.appendChild(crearTarea(tarea, index));
  });
}