

function crearUsuario(name,email){
    return {
        email: email,
        name : name,
        activo : true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    
    };
};

let user = crearUsuario('leo','lala@gmail.com');