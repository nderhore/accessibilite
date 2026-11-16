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

document.getElementById("ouvrir").addEventListener("click", function (event) {
  event.preventDefault();
  modale.classList.add("ouverte");
});

document.getElementById("fermer").addEventListener("click", function () {
  modale.classList.remove("ouverte");
});

document.querySelectorAll(".question").forEach(function (question) {
  question.addEventListener("click", function () {
    question.nextElementSibling.classList.toggle("ouverte");
  });
});
