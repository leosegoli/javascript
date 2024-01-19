//short-circuit

// Falso false 0 ''

let nombre = 'hola';
let username = nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log('soy funcion 1');
    return true;
}


function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn2() && fn1();