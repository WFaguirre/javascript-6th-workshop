 let option = "¡Promesa cumplida y callback ejecutado!";
function manejarAsincronia () {
  return new Promise ((resolve,reject) => {
    if(option === 0){
      reject(new error('dato esta vacio'))
    }
    setTimeout(() => {
      resolve(option);
    }, 5000)
  }) 
}

manejarAsincronia()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message))

//Al cambiar el tiempo del setTimeout se demora por ejemplo los 5 segundos.
//Más los 2 segundos que llevaba antes atrasando un poco más el callback
// La función se comporta como un error is not defined, por lo tal dice que el error en si no esta definido por variables
// Se puede modificar la función para que el callback genere varios tipos de promesa