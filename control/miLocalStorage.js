const KEY = "mis_tareas";

export function guardarTarea(tarea) {
  const tareas = obtenerTareas();
  tareas.push(tarea);
  localStorage.setItem(KEY, JSON.stringify(tareas));
}

export function obtenerTareas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function actualizarTareas(tareas) {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}