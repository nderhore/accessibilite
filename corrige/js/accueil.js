const message = document.getElementById("message");
const modale = document.getElementById("modale");

document.querySelectorAll(".ajouter").forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    message.textContent = "Article ajouté au panier";
    setTimeout(function () {
      message.textContent = "";
    }, 3000);
  });
});

document.getElementById("ouvrir").addEventListener("click", function () {
  modale.showModal();
});

document.getElementById("fermer").addEventListener("click", function () {
  modale.close();
});

document.querySelectorAll(".question").forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const reponse = document.getElementById(bouton.getAttribute("aria-controls"));
    const ouvert = bouton.getAttribute("aria-expanded") === "true";
    bouton.setAttribute("aria-expanded", String(!ouvert));
    reponse.hidden = ouvert;
  });
});
