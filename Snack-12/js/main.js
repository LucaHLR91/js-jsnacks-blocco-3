// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga

var word1 = prompt('inserisci la prima parola');
var word2 = prompt('inserisci la seconda parola');

// function lunghezza(item1, item2) {
//     if(item1.length > item2.length) {
//         console.log(item1);
//         document.getElementById('parola1').innerHTML = item1;
//     }else if(item1.length < item2.length) {
//         console.log(item2)
//         document.getElementById('parola2').innerHTML = item2;
//     }else {
//         document.getElementById('parola1').innerHTML = item1;
//         document.getElementById('parola2').innerHTML = item2;
//         console.log(item1 + ' ' + item2);
//     }
// }

// lunghezza(word1, word2);

// function lunghezza(item1, item2) {
//     if(item1.length > item2.length) {
//         console.log(item1);
//         return item1
//     }else if(item1.length < item2.length) {
//         console.log(item2)
//         return item2
//     }else {
//         console.log(item1 + ' ' + item2);
//         return item1, item2
//     }
// }

// var parola = lunghezza(word1, word2);

//CORREZIONE

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



// document.getElementById('parola1').innerHTML = item1;

// document.getElementById('parola2').innerHTML = item2;

// document.getElementById('parola1').innerHTML = item1;
//         document.getElementById('parola2').innerHTML = item2;