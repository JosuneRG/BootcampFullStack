//--------------- 1- creacion de funciones y pequeña calculadora -------------
function calculadora() {
    
    let value1 = prompt("Introduce el número 1:");
    let sign = prompt("Introduce un signo aritmético:\n '+' --> Suma\n '-' --> Resta\n '*' --> Multiplicación\n '/' --> División");
    let value2 = prompt("Introduce el segundo número:");

    // Convertir las entradas a números
    value1 = Number(value1);
    value2 = Number(value2);

    // Verificar si las conversiones fueron exitosas
    if (isNaN(value1) || isNaN(value2)) {
        console.log("Por favor, introduce números válidos.");
        return;
    }

    let result;

    // Operación según el signo ingresado
    switch (sign) {
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
            if (value2 === 0) {
                console.log("No se puede dividir entre 0.");
                return;
            }
            result = value1 / value2;
            break;

        default:
            console.log("Operación no válida.");
            return;
    }

    console.log("El resultado es:", result);
}
//con esto ejecutamos la calculadora con prompt
//calculadora();


//-------------- 2 - Tranformacion de un string a numero --------------------------
function transformString(str) {
    let num = Number(str);  // Convertimos el string a número
    
    if (isNaN(num)) {  // Comprobamos si el resultado es un número válido
        return 'Error: El string no es un número válido';
    }

    return num;
}

// ------------------------------ 3 - Comprobamos si un número es par o impar -----------------
function isEven(num) {
    if (typeof num !== 'number') {
        return 'Error: El valor ingresado no es un número';  // Mensaje de error más claro
    }

    if (num % 2 === 0) {
        // Par
        return true;
    } else {
        // Impar
        return false;
    }
}

// Ejemplo de uso:
console.log(isEven(3));  // false (impar)

// Transformación de un string a número
console.log(transformString("123"));  // 123
console.log(transformString("abc"));  // Error: El string no es un número válid


//------------------- 4 - Array --------------------------

const frutas =['manzana','piña',false, 12];
console.log(frutas[0]);
console.log(frutas.length - 1);

//Para añadir frutas o elemento al array
frutas.push('mandarina');

for(let i=0; i < frutas.length; i++)
{
    console.log("El numero:" + i, frutas[i]);
}


