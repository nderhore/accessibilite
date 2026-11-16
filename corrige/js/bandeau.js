const messages = [
  "Livraison offerte dès 50 €",
  "Retours gratuits sous 14 jours",
  "Soldes d'hiver sur les sacs"
];

const bandeau = document.getElementById("bandeau");
const pause = document.getElementById("pause");
let numero = 0;
let minuterie = setInterval(changer, 3000);

function changer() {
  numero = numero + 1;
  if (numero === messages.length) {
    numero = 0;
  }
  bandeau.textContent = messages[numero];
}

pause.addEventListener("click", function () {
  if (minuterie === null) {
    minuterie = setInterval(changer, 3000);
    pause.textContent = "Pause";
  } else {
    clearInterval(minuterie);
    minuterie = null;
    pause.textContent = "Lecture";
  }
});
