// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const containerNum = document.getElementById('cont-numeri')

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
let boxNumber = document.getElementById('insertNumbers').innerHTML = arrRndNum;
// console.log(boxNumber);


// comandi dopo 30 secondi 
setTimeout(function () {
// svuoto il container
   containerNum.innerHTML = '';

   // creo una nuova array dove inserire i numeri corretti
   let memorized = [];

   let counter = 0;

// chiedo 5 numeri all'utente
   for (let i = 0; i < 5; i++) {
      // ciclo 5 volte per non ripetere il const
      const userNmb = parseInt(prompt('inserisci un numero'));
      console.log(userNmb);

      

       // inserisco i numeri corretti nell'array
      if(arrRndNum.includes(userNmb)){
         // pusho nel nuovo array
         memorized.push(userNmb);
         console.log(memorized);

         // aumento il counter
         counter++;
         console.log(counter);

         // checcare se il numero è già esistente all'interno dell'array
         // if(memorized.includes(userNmb)){

         // }
      }
   }

   containerNum.innerHTML = `<h1>Hai indovinato ${counter} numeri!! (${memorized})</h1>`;

  
// 10 secondi di tempo
}, 30000);






