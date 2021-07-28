// SCRIVI UNA FUNZIONE CHE (DATO UN NUMERO IN INPUT, STAMPI IL CONTO ALLA ROVESCIA A PARTIRE DAL NUMERO PASSATO.
var input = parseInt(prompt('Inserisci un numero fino a 10'));

function reverseCount(num) {
    do {
        num--;
        console.log(num);
    }while (num > 0);
}

reverseCount(input);

