var teste = 'asdasdasd';

function minha (x, y) {
    return x*y;
}

let tres = 3;
const PI = 3.14;

var numeros = [1, 2, 3];

// ES 2015
numeros.map(function(valor){
    return valor * 2;
});

// ES 2015
numeros.map(valor => valor * 2);


class Matematica {
    multiplica (x, y) {
        return x * y;
    }
}
