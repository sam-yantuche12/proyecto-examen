import { miLocalStorage } from "../../control/miLocalStorage.js";
import { renderTareas } from "../tareas/tareas.js";

export function crearFormulario() {
  const formularioSection = document.getElementById("formulario");
  formularioSection.innerHTML = "";

  const form = document.createElement("form");
  form.innerHTML = `
    <input type="text" id="tareaInput" placeholder="Escribe tu tarea">
    <button type="submit">Agregar</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("tareaInput");
    const valor = input.value.trim();
    if (valor !== "") {
      miLocalStorage.agregarTarea(valor);
      input.value = "";
      renderTareas();
    }
  });

  formularioSection.appendChild(form);
}
