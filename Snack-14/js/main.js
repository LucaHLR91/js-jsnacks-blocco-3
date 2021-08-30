// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.


// Creo oggetto palla
let palla = {
    nome: 'palla',
    peso: 10,
};
console.log(palla);

let peso = parseInt(prompt('inserici il peso della palla'));
palla.peso = peso;
console.log(palla);