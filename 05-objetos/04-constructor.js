//{id: 1, recuperarClave: function(){} }

function Usuario () {
    this.id = 1;
    this.recuperarClave = function(){ //metodo, es una funcion que fue asignada a una propiedad de objeto
        console.log('recuperando clave');
    }

};

let usuario = new Usuario;

console.log(usuario);