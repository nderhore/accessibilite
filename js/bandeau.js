const messages = [
  "Livraison offerte dès 50 €",
  "Retours gratuits sous 14 jours",
  "Soldes d'hiver sur les sacs"
];

const bandeau = document.getElementById("bandeau");
let numero = 0;

setInterval(function () {
  numero = numero + 1;
  if (numero === messages.length) {
    numero = 0;
  }
  bandeau.textContent = messages[numero];
}, 3000);
