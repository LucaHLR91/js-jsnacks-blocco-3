// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numeri.length; i++) {
    if (isEven(numeri[i])) {
        document.getElementById('red').innerHTML += numeri[i];
        document.getElementById('red').style.color = 'red';
    }else {
        document.getElementById('green').innerHTML += numeri[i];
        document.getElementById('red').style.color = 'green';
    }

}

function isEven (num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

