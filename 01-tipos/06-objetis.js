let nombre = "leo";
let anime = "demon slayer";
let edad = 16;

let personaje = {
    nombre : "leo",
    anime : "demon slayer",
    edad : 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;
personaje['edad'] = 15;

delete personaje.anime;