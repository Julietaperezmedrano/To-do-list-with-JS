const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
        //CREAR TAREA
    if (input.value)  { //para ver si existe un valor y si no hay cadena de caracteres no se deberia agregar ninguna tarea
        let tareaNueva = document.createElement("div"); //agregamos un elemento nuevo
        tareaNueva.classList.add("tarea"); //agregamos una clase nueva al elemento nuevo

        //TEXTO INGRESADO POR EL USUARIO
        let texto = document.createElement("p");//crear elemento para el texto ingresao por el usuario
        texto.innerText = input.value; //permite extraer lo que ingresó el usuario
        tareaNueva.appendChild(texto); // agregar a tarea nueva

        //CREAR Y AGREGAR CONTENEDOR DE ICONOS
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        //ICONOS
        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar"); //agregar las clases de boostrap al elemento i
        completar.addEventListener("click", completarTarea);

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);

        iconos.append(completar, eliminar);

        //agregar tarea a la lista

        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert("Por favor Ingresa una tarea.");
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada"); // si la tarea ya tiene la clase completar, la elimina y sino la agrega
}

function eliminarTarea (e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener("click", agregarTarea);

input.addEventListener("keydown", (e) => { //para ver si apretó enter y si lo hizo, agregar la tarea a la lista de tareas
    if (e.key === "Enter") {
    agregarTarea();
    }
});