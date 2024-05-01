// vars call

let option = prompt(`Por favor escoge una de las preguntas que quieres resolver: 
                    \n 1. primera pregunta sobre variables
                    \n 2. segunda pregunta sobre variables
                    \n 3. tercera pregunta sobre variables
                    \n 4. cuarta pregunta sobre funcion
                    \n 5. quinta pregunta sobre función `);

switch(option){
    case "1":

    let firstAnswer = confirm('La siguiente variable que resultado arrojará: \n (Aceptar)Undefined \n (Cancelar)Error ');

    if (firstAnswer === true){
    window.alert('Exacto, verifica en la consola con F12, lo que mostrará la variable a \n al ser un tipo var por default arrojara Undefined');
    console.log("Valor de a:", a);
    }else { 
    window.alert('Incorrecto, verifica lo que dice la consola con F12 sobre la variable a \n al ser un tipo var por default arrojara Undefined');
    console.log("Valor de a:", a);
    }
    // vars declaration
    var a = 1;

    break;

    case "2":
    let secondAnswer = confirm('La siguiente variable que resultado arrojará: \n (Aceptar)Undefined \n (Cancelar)Error ');

    if(secondAnswer === false){
    window.alert('Exacto, verifica en la consola con F12, lo que mostrará la variable b \n al ser una variable let mostrará un error cuando es declarada antes de ser mostrada');
    console.log("Valor de b:", b);
    } else {
    window.alert('Incorrecto, verifica en la consola con F12, lo que mostrará la variable b \n al ser una variable let mostrará un error cuando es declarada antes de ser mostrada');
    console.log("Valor de b:", b);
    }
    // vars declaration
    
    let b = 2;
    

    break;

    case "3":
    let thirdAnswer = confirm('La siguiente variable que resultado arrojará: \n (Aceptar)Undefined \n (Cancelar)Error ');

    if(thirdAnswer === false){
        window.alert('Exacto, verifica en la consola con F12, lo que mostrará la variable c \n al ser una variable const mostrará un error cuando es declarada antes de ser mostrada');
        console.log("Valor de c:", c);
    } else {
        window.alert('Incorrecto, verifica en la consola con F12, lo que mostrará la variable c \n al ser una variable const mostrará un error cuando es declarada antes de ser mostrada');
        console.log("Valor de c:", c);
    }
    // vars declaration
    
    const c = 3;

    break;

    case "4":
    let fourthAnswer = confirm('A continuación adivinaras si la función es declarada o expresada: Aceptar(Declarada)/Cancelar(Expresada)');

    if (fourthAnswer === true){
        window.alert('Exacto, la función es declarada, si vas a la consola con la tecla F12, te darás de cuenta que la función ha sido declarada más adelante y esta detecta la función');
        console.log("Resultado de funcionDeclarada:", funcionDeclarada());
    } else {
        window.alert('Incorrecto, a función es declarada, si vas a la consola con la tecla F12, te darás de cuenta que la función ha sido declarada más adelante y esta detecta la función');
        console.log("Resultado de funcionDeclarada:", funcionDeclarada());
    }
    // functions declarations
    function funcionDeclarada() {
        return "Función declarada ha sido llamada.";
    }

    break;

    case "5":
    let fifthAnswer = confirm('A continuación adivinaras si la función es declarada o expresada: Aceptar(Declarada)/Cancelar(Expresada)');

    if (fifthAnswer === false){
        window.alert('Exacto, la función es expresada, si vas a la consola con la tecla F12, te darás de cuenta que la función ha mostrado un error ya que se declaro despues de llamarla');
        console.log("Resultado de funcionExpresada:", funcionExpresada());
    } else {
        window.alert('Incorrecto, a función es expresada, si vas a la consola con la tecla F12, te darás de cuenta que la función ha mostrado un error ya que se declaro despues de llamarla');
        console.log("Resultado de funcionExpresada:", funcionExpresada());
    }
    
    const funcionExpresada = function () {
        return "Función expresada ha sido llamada.";
    };




}













