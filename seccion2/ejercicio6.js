console.log("Mensaje 1: Inmediatamente")

function eventLoop () {
    setTimeout(() =>{
        console.log("Mensaje 2: Con timeout de 0 segundos")
    }, 0);
}

eventLoop();

function eventLoopDos () {
    setTimeout(() =>{
        console.log("Mensaje 3: Con timeout de 1 segundo")
    }, 1000);
}

eventLoopDos()

//Mensaje 2 esta funcionando con su event loop aparte y con su propia función lo que javascript le lleva un tiempo,
//leer el código dentro de la función
// Javascript empieza su proceso con las macrotareas, llevandole unos milisegundos este proceso, luego analiza las microtareas
// y las ejecuta, haciendo entonces un ciclo interno, que es conocido como event loop
