/* 
CONSEGNA:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// OBBIETTIVO
// Trovare Prezzo Finale Biglietto Max 2 Decimali

// Applichiamo un controllo Ristretto del Codice JS
"use strict"

//Effettuiamo un clear della console
console.clear();


let inputAge = parseInt(prompt('Inserisci la tua età'));
console.log(inputAge);
let km = parseInt(prompt('Inserisci quanti Km vuoi percorrere'));
console.log(km);

//Dichiariamo Le Variabili
console.log('Queste sono le Variabili:'); //Print su console delle variabili dichiarate

const tariffaStandard = 0.21 * km; //Costo Standard Biglietto
console.log(tariffaStandard); // Print Tariffa Standard

const scontoJunior = (tariffaStandard * 20) / 100; 
console.log(scontoJunior);   // Print Sconto Junior

const scontoSenior = (tariffaStandard * 40) / 100; 
console.log(scontoSenior);   // Print Sconto Senior

const junior = 17;
console.log(junior); // Print età Junior

const senior = 65;
console.log(senior); // Print età Senior

let tariffaTotale; // Totale Tariffa Da Calcolare


// Ragionamento Logico

// Se l'età è minore o uguale a 17 viene applicato sconto Junior
if (inputAge <= junior ){                                     
    tariffaTotale = (tariffaStandard - scontoJunior);
    console.log(`Il totale da pagare è: ${tariffaTotale.toFixed(2)} €`);
} 
// Se l'età è maggiore o uguale a 65 viene applicato sconto Senior
else if (inputAge >= senior ){
    tariffaTotale = (tariffaStandard - scontoSenior);      
    console.log(`Il totale da pagare è: ${tariffaTotale.toFixed(2)} €`);
}
// Altrimenti si applica la tariffa standard
else {
    tariffaTotale = (tariffaStandard);                
    console.log(`Il totale da pagare è: ${tariffaTotale.toFixed(2)} €`);
}








