// Funktion, um das Ergebnis anzuzeigen
function Ergebniss() {
    alert("Miau")
    console.log("Ergebniss anzeigen");
}

let a;

// Klasse Dialog
class Dialog {
    dialog;
    closeButton;

    constructor(content, title, options) {
        this.dialog = document.createElement('div');
        this.dialog.className = 'dialog';
        this.dialog.style = "display: none";
        this.dialog.innerHTML = `
            <div class="container">
                <div class="content">
                    <div class='asdd'>
                    <h2>${title}</h2>
                    <p>${content}</p>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(this.dialog);
        document.getElementById("Antwort").blur();
        // Check if options and background color are provided
        if (options) {
            var dsa = document.querySelector('.asdd')
            if (options.bg) {
                dsa.style.backgroundColor = options.bg;
            } if (options.color) {
                dsa.style.color = options.color;
            }
        }
    }

    addCloseButton(textContent) {
        this.closeButton = document.createElement('button');
        this.closeButton.className = 'close mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect';
        this.closeButton.textContent = textContent;
        this.closeButton.addEventListener('click', this.close.bind(this));
        document.querySelector('.content').appendChild(this.closeButton);
        this.closeButton.focus();
    }

    close() {
        document.body.removeChild(this.dialog);
        FrageStellen();
    }

    open() {
        this.dialog.style.display = 'block';
        this.closeButton.focus();
    }
}

// Event-Listener für die Enter-Taste beim Eingabefeld hinzufügen
document.getElementById("Antwort").addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        Kontrolle();
    }
    event.preventDefault();
});

function Kontrolle() {
    var Antwort = document.getElementById("Antwort").value;
    if (Antwort == (parseInt(GET("Reihe")) * parseInt(GET("Reihe2")))) {
        var Falsch = new Dialog("Richtig", "Richtig", { bg: "#00ff00", color: "#FFFFFF" });
        Falsch.addCloseButton("Schließen");
        Falsch.open();
    } else {
        var Falsch = new Dialog(`Das ist nicht ${GET("Reihe")}.`, "Fehler", { bg: "#ff0000", color: "#FFFFFF" });
        Falsch.addCloseButton("Schließen");
        Falsch.open();
    }
}

// Globale Variable für die Anzahl der Runden
let rounds = 0;

// Funktion, um eine neue Frage zu stellen
function FrageStellen() {
    rounds++;
    if (rounds >= 10) {
        Ergebniss(); // Nach 10 Runden das Ergebnis anzeigen
    } else {
        document.getElementById("Antwort").value = "";
        document.getElementById("Antwort").focus();
        var rando = random(10, 0);
        a = random(GET("Reihe2"), 0);
        if (rando > 5) {
            document.getElementById("Anzeige").innerHTML = `Was gibt ${GET("reihe")}<img alt="*" src="../../assets/mal.png"/>${a}?`;
        } else {
            document.getElementById("Anzeige").innerHTML = `Was gibt ${a}<img alt="*" src="../../assets/mal.png"/>${GET("reihe")}?`;
        }
    }
}

// Starten des Fragestellungsprozesses
FrageStellen();

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GET(Variablenname) {
    var Info = window.location.search.substring(1, window.location.search.length);
    var SuchListe = Info.split("&");
    for (var i = 0; i < SuchListe.length; i++) {
        var Index = SuchListe[i].indexOf("=");
        var Eigenschaft = SuchListe[i].substring(0, Index);
        var Wert = SuchListe[i].substring(Index + 1, SuchListe[i].length);
        if (Eigenschaft == Variablenname) {
            return unescape(Wert);
        }
    }
    return null;
}