// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0,2,4,6,8];

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
const arrayBidimensional = [[0,2,4,6,8], ['a','b','c']];

// Funciones
// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1, num2)
{
    return num1 + num2;
};
suma(116, 91);
suma(25, 70);
suma(136, 35);
suma(150, 137);
suma(90, 73);

// 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(num1, num2)
{
    return  Math.pow(num1, num2);
    //o que es lo mismo num1 ** num2;
}
potenciacion(42, 2);
potenciacion(16, 9);
potenciacion(14, 2);
potenciacion(31, 4);
potenciacion(47, 8);

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
let message = "Hola me llamo kuki";

function separarPalabras(message) {
    return message.split(" ");
}

const separationArray = wordSeparate(message);
console.log("Ejercicio 7:",separationArray);

// 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(str, veces) {
    return str.repeat(veces);
}

// Ejemplo de uso ja
let mensaje = "ja";
let veces = 10;
console.log("Ejercicio 8:",repetirString(mensaje, veces));

// Ejemplo de uso estoy castigado
let mensaje2 = "estoy castigado";
let veces2 = 10;
console.log(repetirString(mensaje2, veces2));  

// 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numberPrime)
{
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) 
    {
        if (numero % i === 0) 
        {
            return false; 
        }
    }
    return true; 
}

// Ejemplo de uso:
console.log("Ejercicio 9:");
console.log(esPrimo(821));// true
console.log(esPrimo(1669));// true
console.log(esPrimo(990));// false
console.log(esPrimo(1514));// false

// Mezclando arrays y funciones
//-------------  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor ---------------------
// Función para ordenar un array de números de menor a mayor
/* La función de comparación devuelve un número:
 * Si a - b es negativo (a debe ir antes que b).
 * Si a - b es positivo (b debe ir antes que a).
 * Si a - b es cero, no se cambia el orden.*/
function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

const numberArray = [30, 4, 50, 8, 90, 1, 35, 6];

// Llamamos a la función y mostramos el resultado
console.log("Ejercicio 10: El array ordenado es:", ordenarArray(numberArray));


// 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
function obtenerPares(numberArray1)
{
    for(let i=0; i<numberArray1.length; i++)
    {
        if(numberArray1[i] % 2 == 0)
        {
            console.log("Ejercicio 11: El numero",numberArray1[i], "es par.")
        }
        else
        {
            console.log("Ejercicio 11: El numero",numberArray1[i], "es impar.")
        }
    }
    
}

// Ejemplo de uso:
console.log("Pares en [2, 7, 0, 8]:", obtenerPares([2, 7, 0, 8])); // [2, 0, 8]
console.log("Pares en [7, 61, 38, 90, 17, 119, 93, 118, 14]:", obtenerPares([7, 61, 38, 90, 17, 119, 93, 118, 14])); // [38, 90, 118, 14]
console.log("Pares en [134, 61, 130, 71, 120, 137]:", obtenerPares([134, 61, 130, 71, 120, 137])); // [134, 130, 120]
console.log("Pares en [65, 83, 96, 0, 53, 96, 14, 50, 42]:", obtenerPares([65, 83, 96, 0, 53, 96, 14, 50, 42])); // [96, 0, 96, 14, 50, 42]
console.log("Pares en [20, 90, 129, 88]:", obtenerPares([20, 90, 129, 88])); // [20, 90, 88]


// 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
function pintarArray(arr) {
    return `Ejercicio 12: Array entrada: ${JSON.stringify(arr)} String salida: '${arr.join(', ')}'`;
}

// Ejemplo de uso:
const arrayEjemplo = [0, 1, 2];
console.log(pintarArray(arrayEjemplo)); 


// 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
function  arrayMapi(numberArray2, func)
{
    return numberArray2.map(func);
}

const numberArray2 = [3, 4, 5];
const resultado = arrayMapi(numberArray2, (num) => num * 2); // Multiplica cada número por 2
console.log("Ejercicio 13:", resultado);

// 14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const numberArray3 = [3, 4, 5, 3, 5,6,6,5,6];

console.log("Ejercicio 14: eliminar los duplicados",eliminarDuplicados(numberArray3));

// Iteraciones 🏰 proyecto 🏰
// Arrays
// 15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log("Ejercicio 15:",arrayNumerosNeg); 

// 16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola' , 'Mundo']
console.log("Ejercicio 16:",holaMundo); 

// 17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33 , 'tal'];
console.log("Ejercicio 17:",loGuardoTodo); 

// 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log("Ejercicio 18:",arrayDeArrays); 

// Funciones
// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(num1,num2) {
    return num1*num2;
}

console.log("Ejercicio 19: Multiplicacion",multiplicacion(5,6));

// 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(num1,num2) {
    return num1/num2;
}

console.log("Ejercicio 20: Multiplicacion",division(30,2));

// 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num21) {
    
    if(num21 % 2 ==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let num21 = 30;
console.log("Ejercicio 21: el numero", num21,"es:",esPar(num21));


// 22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
function suma(num1, num2)
{
    return num1+num2;
}

function resta(num1, num2)
{
    return num1-num2;
}

function multiplicacion(num1, num2)
{
    return num1*num2;
}

const arrayFunciones = [suma, resta, multiplicacion];

// Pruebas
console.log("----------- Ejercicio 22: ------------")
console.log("Suma:",  arrayFunciones[0](133, 54));// Suma: 8
console.log("Resta:", arrayFunciones[1](93, 176)); // Resta: 2
console.log("Multiplicación:",  arrayFunciones[2](91, 113));  // Multiplicación: 15

// Mezclando arrays y funciones
// 23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
const numberArray23 = [5,3,6,8];

function ordenarDescendente(array) 
{
    return array.sort((a, b) => b - a);
}

console.log("Ejercicio 23: Array ordenado de mayor a menor:", ordenarDescendente(numberArray23)); 

// 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
const numberArray24 = [5,3,6,8];
const newArray23 = [];

function obtenerImpares(numberArray24) 
{
    for(let i = 0; i<numberArray24.length; i ++)
    {
        if(numberArray24[i] % 2 != 0)
        {
            newArray23.push(numberArray24[i]);
        }
    }
    return newArray23;
}

const impares = obtenerImpares(numberArray24);
console.log("Ejercicio 24: Los numeros impares son:",impares);

// 25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const numberArray25 = [5,3,6,8];
let sum2 = 0;

function sumarArray(numberArray25) {

    for(let i = 0; i<numberArray25.length; i ++)
    {
        sum2 += numberArray25[i];
    }
    return sum2;
}

console.log("Ejercicio 25: La suma de los numeros del array es:", sumarArray(numberArray25)); 

// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
const numberArray26 = [5,3,2,3];
let multip = 1;

function multiplicarArray(numberArray26) {

    for(let i = 0; i<numberArray26.length; i ++)
    {
        multip *= numberArray26[i];
    }
    return multip;
}

console.log("Ejercicio 26: La suma de los numeros del array es:", multiplicarArray(numberArray26));
