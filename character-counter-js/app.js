const area = document.querySelector("#texto");
const caracteres = document.querySelector("#caracteres");
const palabras = document.querySelector("#palabras");
const sinEspacios = document.querySelector("#sinEspacios");
const restantes = document.querySelector("#restantes");
const clean = document.querySelector("#limpiar");
const maximo = document.querySelector("#maximo");
const progreso = document.querySelector("#progreso");
let limite = 200;

area.addEventListener("input", actualizar);
clean.addEventListener("click", limpiar);
maximo.addEventListener("change", cambioLimite);

function cambioLimite(e) {
    limite = Number(e.target.value);
    restantes.textContent = Number(e.target.value);
    restantes.textContent = limite - area.value.length;
    if (area.value.length > limite) {
        restantes.classList.add("excedido");
        area.classList.add("excedido");
        progreso.classList.add("excedido");
    } else {
        restantes.classList.remove("excedido");
        area.classList.remove("excedido");
        progreso.classList.remove("excedido");
    }
    const porcentajeLimite = (area.value.length / limite) * 100;
    progreso.style.width = `${porcentajeLimite}%`;
}

function actualizar() {

    caracteres.textContent = area.value.length;

    const cantPalabras = area.value.trim();

    if (cantPalabras === "") {
        palabras.textContent = 0;
    } else {
        palabras.textContent = cantPalabras.split(/\s+/).length;
    }

    sinEspacios.textContent = area.value.replaceAll(" ", "").length;

    restantes.textContent = limite - area.value.length;

    if (area.value.length > limite) {
        restantes.classList.add("excedido");
        area.classList.add("excedido");
        progreso.classList.add("excedido");
    } else {
        restantes.classList.remove("excedido");
        area.classList.remove("excedido");
        progreso.classList.remove("excedido");
    }

    const porcentajeInput = (area.value.length / limite) * 100;
    progreso.style.width = `${porcentajeInput}%`;

}

function limpiar() {

    area.value = "";
    limite = 200;
    maximo.value = 200;
    actualizar();

}

