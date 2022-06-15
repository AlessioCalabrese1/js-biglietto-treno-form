let sendButton = document.querySelector(".btn");
let kmToGo;
let userAge;
let ticketPrice;
let offer;
let nameUser;

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
        offer = "Biglietto Standard"
    } else if(userAge < 19) {
        ticketPrice = kmToGo * 0.26;
        ticketPrice = ticketPrice - ((ticketPrice * 15) / 100);
        console.log("Il prezzo del biglietto scontato del 15% è:", ticketPrice.toFixed(2) );
        offer = "Sconto Minorenni"
    } else {
        ticketPrice = kmToGo * 0.26;
        ticketPrice = ticketPrice - ((ticketPrice * 35) / 100);
        console.log("Il prezzo del biglietto scontato del 35% è:", ticketPrice.toFixed(2) );
        offer = "Sconto Anziani"
    }


    nameUser = document.getElementById("userName").value;
    console.log(nameUser);
    document.getElementById("passengerName").innerHTML = nameUser;
    document.getElementById("offer").innerHTML = offer;
    document.getElementById("carriageNumber").innerHTML = Math.floor((Math.random() * 13) + 1);
    document.getElementById("code").innerHTML = Math.floor(Math.random() * 250);
    document.getElementById("ticketPrice").innerHTML = ticketPrice.toFixed(2);

    document.getElementById("n-ticket").classList.remove("d-none");
    document.getElementById("valueInput").classList.remove("d-none");
});