
/* 
1. chiedere cognome all'utente con un Prompt.
2. Creare array con lista di cognomi;
3. inserire il cognome dell'utente nell'array esistente;
4. controllare che siano in ordine alfabetico;
6. bisogna stampare in pagina;
*/

// Variabili
var listElement = document.getElementById("lastname-list");
var displayPosition= document.getElementById("position")
var lastname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Dati utente
var userLastname;

do {
    userLastname = prompt("Inserisci il tuo cognome");
} while (!userLastname);


// console.log(lastname);
// console.log(userLastname);

// Aggiungere e ordinare alfabeticamente
lastname.push(userLastname);
lastname.sort();

// Stampare la posizione del cognome utente 
var userPosition = lastname.indexOf(userLastname) + 1; 
displayPosition.innerHTML = "Il cognome si trova in posizione" + " " + userPosition;


// In pagina
var listItems = "";
for (var i = 0; i < lastname.length; i++) {
    listItems += "<li>" + lastname[i] + "</li>";

}

listElement.innerHTML = listItems;

