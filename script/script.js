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
console.clear()


let input = parseInt(prompt('Inserisci la tua età'))
console.log(input)
let km = parseInt(prompt('Inserisci quanti Km vuoi percorrere'))
console.log(km)

//Dichiariamo Le Variabili
console.log('Queste sono le Variabili:'); //Print su console delle variabili dichiarate

const tariffaStandard = 0.21 * km; //Costo Standard Biglietto
console.log(tariffaStandard); // Print Tariffa Standard

const scontoJunior = (0.21*20) / 100; 
console.log(scontoJunior);   // Print Sconto Junior

const scontoSenior = (0.21*40) / 100; 
console.log(scontoSenior);   // Print Sconto Senior

const junior = 17;
console.log(junior); // Print età Junior

const senior = 65;
console.log(senior); // Print età Senior

let tariffaTotale; // Totale Tariffa Da Calcolare


// Ragionamento Logico

if (input <= junior ){
    tariffaTotale = (tariffaStandard - scontoJunior)
    console.log(tariffaTotale);
} else if (input >= senior ){
    tariffaTotale = (tariffaStandard - scontoSenior)
    console.log(tariffaTotale);
} else{
    tariffaTotale = tariffaStandard * km
    console.log(tariffaTotale);
}








