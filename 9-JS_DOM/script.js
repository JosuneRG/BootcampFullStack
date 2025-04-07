
//1 -Con esto te trae el dom que es todo el objeto de html
let value1
value1 = document;
console.log("value1:",value1);


//2 -Con esto te trae el dom que es todo el objeto de html
let value2
value2 = document.head;
console.log("value2:",value2);

//Pruebas DOM
value = document.head;
value = document.doctype;
value = document.designMode;
value = document.characterSet;
value = document.body;

//-------------------------------------------------------------------------
//Con esto seleccionamos el form
const form = document.getElementById("myForm");
console.log(form);

//Con esto seleccionamos el form
const form1 = document.querySelector(".myForm");
console.log(form1);

// Coger una etiqueta
const prueba = document.getElementsByName("head");
console.log(prueba);


// Coger una etiqueta
const prueba1 = document.querySelectorAll('.myForm');
console.log(prueba1);

// Coger una etiqueta
const prueba2 = document.getElementsByClassName('.myForm');
console.log(prueba2);

//Formas de manipular el dom remove, lastElementChild (elimina el ultimo de la lista x ejemplo 
// prueba2.lastElementChild.remove();
// firstelementChil --Añades uno al primero
// 