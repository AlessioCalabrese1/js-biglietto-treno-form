let sendButton = document.querySelector(".btn");
let kmToGo;
let userAge;
let ticketPrice;

sendButton.addEventListener("click", function(){
    kmToGo = parseFloat(document.getElementById("kmToGo").value);
    while (isNaN(kmToGo)) {
        kmToGo = parseFloat(prompt("Ci dispiace, il valore inserito non è corretto! Inserire i km da percorrere"));
    }


    userAge = parseInt(document.getElementById("userAge").value);
    while (isNaN(userAge)) {
        userAge = parseInt(prompt("Ci dispiace, il valore inserito non è corretto! Inserire l'età del passeggiero"));
    }

    if ( (userAge > 18) && (userAge < 66) ) {
        ticketPrice = kmToGo * 0.26;
        console.log("Il prezzo del biglietto senza nessuno sconto è:", ticketPrice.toFixed(2) );
    } else if(userAge < 19) {
        ticketPrice = kmToGo * 0.26;
        ticketPrice = ticketPrice - ((ticketPrice * 15) / 100);
        console.log("Il prezzo del biglietto scontato del 15% è:", ticketPrice.toFixed(2) );
    } else {
        ticketPrice = kmToGo * 0.26;
        ticketPrice = ticketPrice - ((ticketPrice * 35) / 100);
        console.log("Il prezzo del biglietto scontato del 35% è:", ticketPrice.toFixed(2) );
    }
    document.getElementById("valueInput").innerHTML = "Il prezzo è: " + ticketPrice.toFixed(2);
});