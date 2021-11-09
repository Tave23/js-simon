// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo array vuota
let arrRndNum = [];


// ************
// funzione per generare numeri da 1 a X
// ************
while(arrRndNum.length < 5){
   let r = Math.floor(Math.random() * 100) + 1;
   if(arrRndNum.indexOf(r) === -1) arrRndNum.push(r);
   
};
console.log(arrRndNum);


// prendo l'h3 e ci stampo dentro i numeri
const boxNumber = document.getElementById('insertNumbers').innerHTML = arrRndNum;
// console.log(boxNumber);


// comandi dopo 30 secondi 
setTimeout(function () {

   
}, 1000);






