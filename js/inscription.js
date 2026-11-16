const message = document.getElementById("message");
const erreur = document.getElementById("erreur");
const champs = [
  document.getElementById("nom"),
  document.getElementById("email"),
  document.getElementById("mdp")
];

document.getElementById("envoyer").addEventListener("click", function () {
  let ok = true;

  champs.forEach(function (champ) {
    champ.classList.remove("invalide");
    if (champ.value === "") {
      champ.classList.add("invalide");
      ok = false;
    }
  });

  const email = document.getElementById("email");
  if (email.value !== "" && !email.value.includes("@")) {
    email.classList.add("invalide");
    ok = false;
  }

  if (ok) {
    erreur.textContent = "";
    message.textContent = "Compte créé";
    setTimeout(function () {
      message.textContent = "";
    }, 3000);
  } else {
    erreur.textContent = "Le formulaire contient des erreurs.";
  }
});
