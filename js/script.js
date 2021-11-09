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

// prendo l'h3 e ci stampo dentro i numeri
let boxNumber = document.getElementById('insertNumbers').innerHTML = arrRndNum;
// console.log(boxNumber);

console.log(arrRndNum);

// comandi dopo 30 secondi 
setTimeout(function () {
// svuoto il container
   containerNum.innerHTML = '';

   // creo una nuova array dove inserire i numeri corretti
   let memorized = [];

   let counter = 0;

   // variabili per esito memory game
   let tentativi = '';
   let vittoria = '';

// chiedo 5 numeri all'utente
   for (let i = 0; i < 5; i++) {
      // ciclo 5 volte per non ripetere il const
      const userNmb = parseInt(prompt('scrivi un numero'));
      console.log(userNmb);

      

       // inserisco i numeri corretti nell'array
      if(arrRndNum.includes(userNmb)){
         // se è già dentro al array allora rimuovilo
         if(memorized.includes(userNmb)){
            memorized.pop(userNmb)
            counter--;

            console.log(memorized);
         }

         // pusho nel nuovo array
         memorized.push(userNmb);
         console.log(memorized);

         // aumento il counter
         counter++;
         console.log(counter);
         
      };


      if (counter > 1 || counter == 0){
         tentativi = 'numeri';
      } else {
         tentativi = 'numero';
      }
   }

   containerNum.innerHTML = `
   <h1>Hai indovinato ${counter} ${tentativi} !! </h1>
   <h1 class="text-center">${memorized}</h1>
   `;

  
// 30 secondi di tempo
}, 30000);






