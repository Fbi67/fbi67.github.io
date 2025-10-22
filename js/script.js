/*
Type * Was
GET  * reihe
GET  * Reihe2
ID   * Antwort
ID   * Anzeige
*/

// Funktion, um das Ergebnis anzuzeigen
function Ergebniss() {
  alert("Miau");
  console.log("Ergebniss anzeigen");
}

let a;

// Klasse Dialog

// Event-Listener für die Enter-Taste beim Eingabefeld hinzufügen
document.getElementById("Antwort").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    Kontrolle();
  }
  event.preventDefault();
});

function Kontrolle() {
  var Antwort = document.getElementById("Antwort").value;
  if (Antwort == parseInt(GET("Reihe")) * parseInt(GET("Reihe2"))) {
    var Falsch = new Dialog("Richtig", "Richtig", {
      bg: "#00ff00",
      color: "#FFFFFF",
    });
    Falsch.addCloseButton("Schließen");
    Falsch.open();
  } else {
    var Falsch = new Dialog(`Das ist nicht ${GET("Reihe")}.`, "Fehler", {
      bg: "#ff0000",
      color: "#FFFFFF",
    });
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
      document.getElementById("Anzeige").innerHTML = `Was gibt ${GET(
        "reihe"
      )}<img alt="*" src="../../assets/mal.png"/>${a}?`;
    } else {
      document.getElementById(
        "Anzeige"
      ).innerHTML = `Was gibt ${a}<img alt="*" src="../../assets/mal.png"/>${GET(
        "reihe"
      )}?`;
    }
  }
}

// Starten des Fragestellungsprozesses
FrageStellen();

/*function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}*/
