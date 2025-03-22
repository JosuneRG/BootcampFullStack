// Prueba 1
// Variables
var nombre = 'Jon';
const age = 28;
const isActive = false;
const newvalue =  10;

//Mensajes de consola
console.log("Nombre: " + nombre);
console.log("Edad: " + age + newvalue);

//Prueba 2
let message = "Hola!";
message = "Mundo";
console.log("Mensaje 1: " + message);

//Prueba 3
let greetings = null;
greetings = message;
console.log("Mensaje 2: " + greetings);

//Prueba  if 4
const age1 = 28;
const prub = false;

if(prub == true)
{
    console.log("Entra en el primero");
}
else if (age1 > 18)
{
    console.log("Eres mayor de edad");
}
else
{
    onsole.log("No eres mayor de edad");
}

//Prueba  swhich 4
let expr = "cerezas";

switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  //Prueba for
  for(let i= 0; i<10; i++)
  {
    console.log('Vuelta del for nº' + i);
  }

  //Prueba while
  let a = 1;

  while(a < 10)
  {
    console.log("Vuelta bucle while:" , a);
    a ++;
  }

  //Prueba OR y AND
  const number = 50;
  const age3 = 20;

  if(number > 10 || number <100)
  {
    console.log('Es mayor que 10')
  }

  if(number > 10 && age3 > 10)
    {
      console.log('Es mayor que 10 los dos.')
    }