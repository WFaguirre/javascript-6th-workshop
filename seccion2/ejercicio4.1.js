//¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

//Las funciones declaradas son las únicas que se pueden llamar antes de su declaración mostrando el mismo resultado como si fuera abajo de la función
//Las funciones expresadas al ser llamadas antes muestran un error en consola, por lo que se deben llamar despues de hacer la función


// ¿Cómo difieren los resultados entre la función declarada y la función expresada?

//En la forma como se declara la función, función declarada utilizamos la palabra reservada function antes de hacer la función
//Y en la forma expresada primero hacemos el nombre de la función y despues utilizamos la palabra reservada function


//¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

//En general, las funciones declaradas se utilizan para la estructura general del programa y las expresadas para casos más específicos o para mantener el código más modular y limpio.

console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());