var teste = 'asdasdasd';
function minha(x, y) {
    return x * y;
}
var tres = 3;
var PI = 3.14;
var numeros = [1, 2, 3];
// ES 2015
numeros.map(function (valor) {
    return valor * 2;
});
// ES 2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.multiplica = function (x, y) {
        return x * y;
    };
    return Matematica;
}());
