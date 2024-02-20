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
  
  let question2 = demande_creation();
  
  function ouverture_compte() {
    let entrer_sold = prompt(
      "Veuillez saisir le montant que vous souhaitez pour l'ouverture du nouveau compte."
    );
    while (entrer_sold < 500) {
      entrer_sold = prompt("Veuillez entrer un montant valide de 500€ ou plus.");
    }
    if (entrer_sold >= 500) {
      alert(
        "Vous avez ouvert un nouveau compte avec un solde de " + entrer_sold + "€"
      );
      alert("Votre découvert est " + question2 + "€");
    }
  }
  ouverture_compte();
  