import { crearFormulario } from "./componentes/formulario/formulario.js";
import { mostrarTareas } from "./componentes/tareas/tareas.js";

const app = document.querySelector("#app");


const contenedorTareas = document.createElement("div");


app.appendChild(crearFormulario(contenedortareas));
app.appendChild(contenedortareas);


mostrarTareas(contenedortareas);