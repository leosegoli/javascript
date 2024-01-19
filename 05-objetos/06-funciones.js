function Usuario(nombre){
    this.nombre = nombre;
};

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let usuario = new U('leo');


function of(Fn, arg){
    return new Fn(arg);
};

let user1 = of(Usuario,'chanchito');
