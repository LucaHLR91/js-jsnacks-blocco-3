// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga

var word1 = prompt('inserisci la prima parola');
var word2 = prompt('inserisci la seconda parola');


if (parolalunga(word1, word2)) {
    console.log(word1, word2);
}else if (word1.length > word2.length) {
    console.log(word1);
}else {
    console.log(word2);
}





function parolalunga (item1, item2) {
    
    if (item1.length == item2.length) {
        return true;
    }else {
        return false;
    }
}



