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

//Dichiariamo Le Variabili

console.log('Queste sono le Variabili:'); //Print su console delle variabili dichiarate

const tariffaStandard = 0.21; //Costo Standard Biglietto
console.log(tariffaStandard); // Print Tariffa Standard

const tariffaJunior = 20; 
console.log(tariffaJunior);   // Print Tariffa Junior

const tariffaSenior = 40; 
console.log(tariffaSenior);   // Print Tariffa Senior

const junior = 17;
console.log(junior); // Print età Junior

const senior = 65;
console.log(senior); // Print età Senior




