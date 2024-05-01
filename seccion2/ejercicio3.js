const crearSumador = (function() {

    let primerSumando = 5;
    

    function segundoSumando() {
        return primerSumando++;
    }

    function tercerSumando() {
        return primerSumando++;
    }

    function resultado() {
        return primerSumando;
    }

    return {
        segundoSumando,
        tercerSumando,
        resultado
    }
})();


let sumarCinco = crearSumador.resultado();

let sumas = 3 + sumarCinco;

console.log(sumas);

let sumarTres = crearSumador.resultado();

let sumasDos = 2 + sumarTres;

console.log(sumasDos)

//las funciones mantienen su acceso ya que estas manejan sus variables de forma local, lo que hace que los cambios externos no afecten la original
//las funciones se iran guardando de manera permanente a traves de cada invocación






