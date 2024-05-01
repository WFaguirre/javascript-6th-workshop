//Paso 1 Este codigo lo evalua y de manera sincronizada entra como una macrotarea
console.log("Inicio del script");



//Paso 9 y ultimo paso Este setTimeout entra en una cola de tareas como anonima despues pasa a un callstack y posteriormente es imprimida
setTimeout(() => {//Esta parte sale de la cola de macrotareas y despues pasa a call stack y es imprimida
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);


//Paso 7 Este setTimeout entra en una cola de tareas como anonima, despues pasa a un callstack y es imprimida
setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);


Promise.resolve()

//Paso 8 Esta parte de la promesa entra a un callstack, el tiempo que demora y lo que sigue entra a una cola macrotarea
//Paso 8 aqui está en espera para ser imprimda
  .then(() => {
    setTimeout(() => {
        

        //Paso 3 Esta parte sale de las macrotareas pasa a un call stack y es imprimida
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })


  //Paso 5 Aqui entra sale de la cola de microtarea y pasa a un callstack y posteriormente se imprime
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });



//Paso 4 Esta entra  a la cola de microtareas y despues pasa a ser un call stack, posteriormente es imprimida
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })


//Paso 6 Esta parte entra a la cola de la microtarea, al salir de la cola de microtarea pasa a un callstack y se imprime
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });


//Paso 2 Esta parte del código entra despues de mandar las otras tareas a la cola y se convierte en una macrotarea
//Paso 2 Posteriormente es imprimida
console.log("Fin del script");


¿Qué tareas se consideran macrotareas y cuáles son microtareas?
//"Inicio del script", "Final del script", .then y su mensaje y los setTimeOuts se consideran Macrotareas!!
//Las multiples opciones .then dentro de la ultima promesa, hacen parte de unas microtareas


¿Cómo se relacionan las macrotareas y microtareas con el event loop?
//Tanto macrotareas y microtarea se relacionan en el Eventloop, por que todas entran a una cola de espera mientras Javascript compila


¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
//La microtarea entra a un cola y le da la oportunidad a la macrotarea para que pase all callstack


¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
//Corren a una cola de microtarea, y posteriormente pasan a un callstack los setTimeout, posteriomente pasan los otro setTimeout a macrotarea