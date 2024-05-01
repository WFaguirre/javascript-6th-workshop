let option = prompt(`Adivina como va ser el orden de los mensajes en consola:
                    \n a). Primer setTimeout, Segundo setTimeout, Promesa resuelta, Inicio del script, Fin del script
                    \n b). Fin del script, Inicio del script,Primer setTimeout, Segundo setTimeout,Promesa resuelta
                    \n c). Inicio del script, Fin del script, Promesa resuelta, Primer setTimeout, Segundo setTimeout`);

switch(option){
    case "a":
        window.alert(`Repuesta incorrecta, los eventLoop trabajan primero con las macrotareas,
        en este caso Inicio y final de script, despues pasa por las microtareas o callback en este caso promesa resuelta,
        y finalmente termina con los setTimeout, Por favor presiona F12 para verificar `);
        break;
    case "b":
        window.alert(`Repuesta incorrecta, los eventLoop trabajan primero con las macrotareas,
        en este caso Inicio y final de script, despues pasa por las microtareas o callback en este caso promesa resuelta,
        y finalmente termina con los setTimeout, Por favor presiona F12 para verificar`);
        break;
    case "c":
        window.alert(`Felicitaciones!!, los eventLoop trabajan primero con las macrotareas,
        en este caso Inicio y final de script, despues pasa por las microtareas o callback en este caso promesa resuelta,
        y finalmente termina con los setTimeout, Por favor presiona F12 para verificar `);
        break;
}


console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");