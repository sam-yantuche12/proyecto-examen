export const miLocalStorage = {
  obtenerTareas() {
    return JSON.parse(localStorage.getItem("tareas") || "[]");
  },
  agregarTarea(tarea) {
    const tareas = this.obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },
  eliminarTarea(tarea) {
    let tareas = this.obtenerTareas();
    tareas = tareas.filter((t) => t !== tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },
};
