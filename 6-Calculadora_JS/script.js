function calculadora(){
    let value1 = prompt("Introduce el numero 1:");
    let sign = prompt ("Introduce un signo aritmetico:\n '+' --> Suma\n '---> Resta");
    let value2 = "Introduce el segundo numero:"

    value1 = Number(value1);
    value2 =+ value2;

    let result
    
    switch(sign)
    {
        case '+':
            result = value1 + value2;
        break;

        case '-':
            result = value1 - value2;
        break;

        case '*':
            result = value1 * value2;
        break;

        case '/':
            result = value1 / value2;
        break;

        default:
            break;
    }

    console.log("El resultado es:", result);
}