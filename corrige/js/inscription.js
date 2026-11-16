const message = document.getElementById("message");
const formulaire = document.getElementById("formulaire");
const champs = ["nom", "email", "mdp"];

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  let ok = true;

  champs.forEach(function (id) {
    const champ = document.getElementById(id);
    const erreur = document.getElementById("erreur-" + id);
    erreur.textContent = "";
    champ.removeAttribute("aria-invalid");

    if (champ.value === "") {
      erreur.textContent = "Erreur : ce champ est obligatoire.";
    } else if (id === "email" && !champ.value.includes("@")) {
      erreur.textContent = "Erreur : il manque le « @ ». Exemple : camille.martin@mail.fr";
    }

    if (erreur.textContent !== "") {
      champ.setAttribute("aria-invalid", "true");
      ok = false;
    }
  });

  if (ok) {
    message.textContent = "Compte créé";
    setTimeout(function () {
      message.textContent = "";
    }, 3000);
  } else {
    document.querySelector("[aria-invalid]").focus();
  }
});
