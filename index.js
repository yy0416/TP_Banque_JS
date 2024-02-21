function demande_creation() {
  let question1 = prompt(
    "Voulez-vous avoir un découvert? (Répondre Oui en Y ou y, répondre non en n'importe quel caractère)"
  ).trim();
  let question2;
  if (question1.toLowerCase() === "y") {
    question2 = parseFloat(
      prompt("Veuillez saisir le montant que vous voulez entre 100€ et 2000€")
    );
    while (question2 < 100 || question2 > 2000) {
      question2 = parseFloat(
        prompt("Veuillez rentrer un montant valide entre 100€ et 2000€")
      );
    }

    if (question2 >= 100 && question2 <= 2000) {
      alert("Vous avez demandé un découvert de " + question2 + "€");
    } else {
      alert("Veuillez rentrer un montant valide entre 100€ et 2000€.");
    }
  } else {
    alert("Vous n'avez pas demandé de découvert.");
  }
  return question2;
}

function ouverture_compte() {
  let entrer_sold = prompt(
    "Veuillez saisir le montant que vous souhaitez pour l'ouverture du nouveau compte."
  );
  if (entrer_sold < 500) {
    entrer_sold = prompt("Veuillez entrer un montant valide de 500€ ou plus.");
  }
  if (entrer_sold >= 500) {
    alert(
      "Vous avez ouvert un nouveau compte avec un solde de " + entrer_sold + "€"
    );
  }
  return entrer_sold;
}

function gererRetraits() {
  // Demander le montant du découvert autorisé
  let decouvertAutorise = demande_creation();

  // Demander le solde en cours
  let solde = ouverture_compte();

  // Tant que le solde le permet, demander au client s'il souhaite effectuer un retrait
  while (solde >= -decouvertAutorise) {
    let retrait = parseFloat(
      prompt("Veuillez saisir le montant du retrait (saisissez 0 pour quitter) :")
    );

    if (retrait === 0) {
      break; // Quitter la boucle si le client choisit de quitter
    } else if (retrait > 0 && retrait <= solde + decouvertAutorise) {
      solde -= retrait; // Déduire le montant du retrait du solde
      alert(
        "Retrait effectué avec succès. Nouveau solde : " +
          solde +
          " Montant du découvert : " +
          decouvertAutorise
      );
    } else {
      alert("Solde insuffisant pour ce retrait.");
    }
  }

  // Afficher le nouveau solde et le montant du découvert ou "solde insuffisant"
  if (solde < 0) {
    alert("Solde insuffisant.");
  } else {
    alert(
      "Opération terminée. Nouveau solde : " +
        solde +
        " Montant du découvert : " +
        decouvertAutorise
    );
  }
}

// Appeler la fonction pour démarrer la gestion des retraits
gererRetraits();
