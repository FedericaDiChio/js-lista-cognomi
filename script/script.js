
/* 
1. chiedere cognome all'utente con un Prompt.
2. Creare array con lista di cognomi;
3. inserire il cognome dell'utente nell'array esistente;
4. controllare che siano in ordine alfabetico;
6. bisogna stampare in pagina;
*/

// HTML Elements 
var listElement = document.getElementById("lastname-list");
var displayPosition= document.getElementById("position")

// Variables
var lastname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Collect Data 
var userLastname;

do {
    userLastname = prompt("Inserisci il tuo cognome");
} while (!userLastname);

// Add and sort 
lastname.push(userLastname);
lastname.sort();


// Print position 
var userPosition = lastname.indexOf(userLastname) + 1; 
displayPosition.innerHTML = "Il cognome si trova in posizione" + " " + userPosition;

// Print in page 
var listItems = "";
for (var i = 0; i < lastname.length; i++) {
    listItems += "<li>" + lastname[i] + "</li>";

}

listElement.innerHTML = listItems;



//* TO DO - Lettere maiuscole. 