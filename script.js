// ===== PARTE A: array de valores simples =====
console.log("--- PARTE A ---");

let categorias = ["Terror","Accion","Drama","Ciencia Ficcion"];

console.log("*Consigna 2:");

//*Consigna 2
console.log(
  "El Array contiene: " + categorias.length + " Categorias." + "\n" +
  categorias[0] + ", " + categorias[1] + ", " + 
  categorias[2] + ", " + categorias[3]
);

console.log("*Consigna 3:");

//*Consigna 3
console.log(
  "La primera Categoria es: " + categorias[0] + "\n" +
  "La ultima Categoria es: " + categorias[categorias.length - 1]
);

console.log("*Consigna 4:");

//*Consigna 4
console.log(
  "El Array pasa a tener " + categorias.push("Suspenso") + " Categorias"
);

console.log("*Consigna 5:");

//*Consigna 5
const categoriaBorrada = categorias.pop();

console.log("La Categoria Borrada es: " + categoriaBorrada);

// ===== PARTE B: objeto =====
console.log("\n --- PARTE B ---");

//*Consigna 6
const usuario = {
  nombre: "Gaston",
  edad: 32,
  ciudad:"Posadas",
  temaFavorito: "Given Up"
};

console.log("*Consigna 7:");

//*Consigna 7
console.log(
  "Mi Nombre es " + usuario.nombre + 
  ", tengo " + usuario.edad + 
  ", vivo en la Ciudad de " + usuario.ciudad +
  " y mi tema Favorito es " + usuario.temaFavorito
);

console.log("*Consigna 8:");

//Consigna 8
console.log(
  "Se cambio el nombre " + usuario.nombre + "\n" +
  "Por el nuevo nombre " + (usuario.nombre = "Sergio")
);

console.log("*Consigna 9:");

//Consigna 9
console.log(
  "Se agrego la nueva propiedad colorFavorito con el valor " + 
  (usuario.colorFavorito = "Verde")
);

console.log(usuario);

// ===== PARTE C: array de objetos =====
console.log("\n--- PARTE C ---");

//Consigna 10
const catalogo = [
  {
    titulo: "Interstellar",
    categoria: "Ciencia Ficcion",
    puntaje: 10,
    visto: true
  },
  {
    titulo: "La Odisea",
    categoria: "Accion",
    puntaje: 0,
    visto: false
  },
  {
    titulo: "Oppenheimer",
    categoria: "Suspenso",
    puntaje: 9,
    visto: true
  },
  {
    titulo: "The Prestige",
    categoria: "Suspenso",
    puntaje: 10,
    visto: true
  }
];

console.log("*Consigna 11:");

//Consigna 11
console.log("El titulo del primer Elemento es: " +  catalogo[0].titulo);

if (catalogo[2].puntaje == 0){
  console.log("El puntaje del tercer Elemento es: Sin Puntaje");
}
else{
  console.log("El puntaje del tercer Elemento es: " + catalogo[2].puntaje);
}

console.log("*Consigna 12:");

//Consigna 12
if(catalogo[1].visto){
  console.log(
    catalogo[1].titulo + " - " + 
    catalogo[1].categoria + " - " +
    catalogo[1].puntaje + "/10 - Visto" 
  );
}
else{
  console.log(
    catalogo[1].titulo + " - " + 
    catalogo[1].categoria + " - " +
    catalogo[1].puntaje + "/10 - Pendiente"
  );
}

console.log("*Consigna 13:");

//Consigna 13

if (catalogo[1].visto){
  console.log(
    "Vi la Pelicula " + catalogo[1].titulo + 
    " y actualizo su puntaje a " + (catalogo[1].puntaje = 8)
  );

}
else{
  console.log(
    "Vi la Pelicula " + catalogo[1].titulo + 
    " y actualizo su puntaje a " + (catalogo[1].puntaje = 8) + 
    ". Ademas pasa a Visto"
  );
  catalogo[1].visto = true;
};

console.log("*Consigna 14:");

//Consigna 14
const nuevaPelicula = {
  titulo: "t5",
  categoria: "c5",
  puntaje: 10,
  visto: true
};

console.log(
  "El Array contiene: " + 
  catalogo.push(nuevaPelicula) + " Peliculas."
);

// ===== PARTE D: destructuring =====
console.log("\n--- PARTE D ---");

console.log("*Consigna 15:");

//Consigna 15
const { titulo , categoria , puntaje , visto } = catalogo[1];

if(visto){
  console.log(
    titulo + " - " + 
    categoria + " - " +
    puntaje + "/10 - Visto" 
  );
}
else{
  console.log(
    titulo + " - " + 
    categoria + " - " +
    puntaje + "/10 - Pendiente"
  );
}

console.log("*Consigna 16:");

//Consigna 16
const { nombre , ciudad } = usuario;

console.log(
  "Nombre: " + nombre + "\n" +
  "Ciudad: " + ciudad
);

console.log("*Consigna 17:");

//Consigna 17

const [ primero , segundo ] =  catalogo; 
console.log(
  "El Titulo del Primer Elemento es: " + primero.titulo + "\n" +
  "El Titulo del Segundo Elemento es: " + segundo.titulo
);

// ===== PARTE E: Complementaria =====
console.log("\n--- PARTE E ---");

console.log("*Consigna 18:");

//Consigna 18
const [ {titulo : titulo1} , {titulo : titulo2} ] =  catalogo;
console.log(
  "El Titulo del Primer Elemento es: " + titulo1 + "\n" +
  "El Titulo del Segundo Elemento es: " + titulo2
);

console.log("*Consigna 19:");

//Consigna 19
const {dni = 0} = usuario;
console.log(dni);

console.log("*Consigna 20:");

//Consigna 20
let primerValor = 34;
let segundoValor = 64;

[ primerValor , segundoValor ] = [ segundoValor , primerValor ]

console.log( primerValor , segundoValor )
