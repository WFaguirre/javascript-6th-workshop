function Sale (total){

    return function(amount){
        total+=amount;
        console.log(total);
    };

}

let sale = new Sale(0);

let option = prompt('Deseas ingresar un número: si/no');


while (option === "si") {

    let input = Number(prompt('Ingrese un número: '));
    

    sale(input);


    option = prompt('Deseas ingresar otro número: si/no');

}








