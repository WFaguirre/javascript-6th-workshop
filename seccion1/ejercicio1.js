var globalVariable = confirm('Esta es una variable global?: si(aceptar)/no(cancelar)');

var descriptionGlobalVariable = prompt('Justifica tu respuesta aqui: ');

if(globalVariable == true){
    window.alert('Exacto, esta es una variable global, ya que esta afuera de una función y esta declarada como var\n aqui está el código var globalVariable = confirm("Esta es una variable global?: si(aceptar)/no(cancelar)"); ')
} else {
    window.alert('Respuesta incorrecta, esta es una variable global, ya que esta afuera de una función y esta declarada como var\n aqui está el código var globalVariable = confirm("Esta es una variable global?: si(aceptar)/no(cancelar)"); ')
}


function testFunction () {
    let variableInFunction = confirm('Estas en una variable de función: si(aceptar)/no(cancelar)');
    let variableInFunctionDescription = prompt('Justifica tu respuesta aqui: ');

    if(variableInFunction == true){
        window.alert('Exacto, esta variable esta dentro de una función, solo funciona de manera local.');
    } else {
        window.alert('Incorrecto, esta variable esta dentro de una función, solo funciona de manera local.');
    }

    let variableBlock = confirm('Estas en una variable de bloque: si(aceptar)/no(cancelar) ')
    let variableBlockDescription = prompt('Justifica tu respuesta aqui: ');

    if(variableBlock = true){
        window.alert('Exacto, esta variable es un bloque de la función pero no esta toda la función por lo tanto puede ser considerada variable de bloque');
    } else {
        window.alert('Incorrecto, esta variable es un bloque de la función pero no esta toda la función por lo tanto puede ser considerada variable de bloque');
    }
}

testFunction();


