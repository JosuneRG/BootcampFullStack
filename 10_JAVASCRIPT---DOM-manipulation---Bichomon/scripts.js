console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const gen_id = document.getElementById('gen-1');
gen_id.innerText = 'Generasión 1 Pokimon';

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const gen1 = document.querySelector('.infocard-list');
gen1.style.background = 'lightblue';

// 3. Imprime por consola la URL de la página.
let value1 = document.URL;
console.log("La url del ejer3: ",value1);

// 4. Imprime por consola el dominio de la página.
let value2 = document.domain;
console.log("El domain del ejer4: ",value2);

// 5. Imprime todos los nodos de imagen.
let value3 = document.getElementsByTagName('img');
console.log("Los nodos de img ejer5: ",value3);

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
function cambiarImagenes() {
    const imagenes = document.querySelectorAll('img'); // Selecciona todas las imágenes
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
    }
}

cambiarImagenes();

//o este codigo: 
// document.querySelectorAll('img').forEach(img => {
// img.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
//});

// *Premium:*
// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const coloInfocards = document.querySelectorAll('.infocard-lg-data.text-muted'); 

// Recorremos cada card
coloInfocards.forEach(coloInfocard => {
    // Buscamos si dentro tiene un span con la clase "itype flying"
    const flyingType = coloInfocard.querySelector('.itype.flying');
    
    // Si lo tiene, cambiamos el fondo del card
    if (flyingType) {
        coloInfocard.style.backgroundColor = 'green';
    }
});



