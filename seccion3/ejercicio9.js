function asinc(time,message){
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then (response => {

                if(!response.ok){
                    throw new Error('Error al cargar el mensaje');
                }
                return response.json();
            })
            .then(data => {
                console.log(message);
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
        }, time)
    })
}

let time = Number(prompt('Ingresa el tiempo en milisegundos (1000 = 1seg) para mostrar mensaje'));
let message = prompt('Ingresa el mensaje que quieres mostrar');

asinc(time, message)
    .then(data => console.log(data))
    .catch(error => console.error(error));





