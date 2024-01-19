const user = {id: 1}; // se pueden agregar propiedades al objeto pero no modificar su contenido si está definido como constate

user.name = 'leonardo';
user.guardar = function(){
    console.log('guardando', user.name)
}

user.guardar();
delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze({id: 1}); //no se puede modificar ni agregar proiedades
const user2 = Object.seal({id: 1}); //con seal se puede cambiar las los valores pero no las prop
