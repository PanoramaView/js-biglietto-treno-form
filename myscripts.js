window.addEventListener("load", function () {
    script();
})
function script() {
    var formDati = document.getElementById("formDati");
    var passeggero = document.getElementById("passeggero");
    var km = document.getElementById("km");
    var age = document.getElementById("age");
    var offertahtml = document.getElementById("offerta");
    var carrozzahtml = document.getElementById("carrozza");
    var cphtml = document.getElementById("cp");
    var prezzohtml = document.getElementById("prezzo");

    formDati.addEventListener("submit", function (event) {
        event.preventDefault(); //impedisce il refresh del sito
        console.log("Form has been submitted.")
        var form = event.currentTarget;
        var formElements = form.elements;

        var namesur = formElements.namesur.value;
        // uguale a :
        // var nomeElement = document.querySelector("[name= 'nome']")
        // var nome = nomeElement.value;
        var age = formElements.age.value;
        var kms = formElements.km.value;
        var carrozza = "";

        //generate not existing number
        var codiceList = new Array();
        var checkcodice = false;
        var cp = 0

        if (codiceList.length < 1) {
            while (checkcodice === false) {
                var codice = Math.floor(Math.random() * 9999) + 90000;
                
                console.log("Codice: " + codice);
                for (var i = 0; i < checkcodice.length; i++) {
                    if (codiceList[i] === codice) {
                        checkcodice = true;
                        console.log("Checkcodice: " + checkcodice);
                    }
                }
                if (!checkcodice) {
                    codiceList.push(codice);
                    checkcodice = true;
                    cp = codice;
                }

            }
        } else {
            var codice = Math.floor(Math.random() * 9999) + 90000;
            codiceList.push(codice);
            cp = codice;
        }

        //carrozza
        var ncar = 12; //numero di carrozze
        var carrozza = Math.ceil(Math.random() * ncar);

        //prezzo
        var prezzo = kms * 0.5;
        if(age === "Anziano"){
            prezzo = prezzo * 0.8;
        }
        if(age ==="Minorenne"){
            prezzo = prezzo * 0.7;
        }
        

        //output
        passeggero.innerHTML = namesur;
        offertahtml.innerHTML = age;
        carrozzahtml.innerHTML = carrozza;
        cphtml.innerHTML = cp;
        prezzohtml.innerHTML = prezzo.toFixed(2) + "€";

        // var risposta = 0;
        // while (risposta === 0) {
        //     var risp = prompt("vuole un altro biglietto? si/no");
        //     if (risp == "si") {
        //         risposta++;
        //     } else if (risp == "no") {
        //         risposta++;
        //         conta++;
        //     } else {
        //         alert("Deve rispondere con si o no");
        //     }
        // }
    })
}