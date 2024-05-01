//funcion declarada

console.log(funcionDeclarada())

function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

console.log(funcionDeclarada())

//Funcion expresada

//muestra un error al ser invocada antes de la fucnión si elimino la este console.log() mostrará en el otro console.log() el resultado

console.log(funcionExpresada());

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
}

console.log(funcionExpresada());

