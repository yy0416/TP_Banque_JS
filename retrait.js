function gererRetraits() {
    // Demander le montant du découvert autorisé
    let decouvertAutorise = parseFloat(prompt("Veuillez saisir le montant du découvert autorisé (saisissez 0 s'il n'y a pas de découvert) :"));

    // Demander le solde en cours
    let solde = parseFloat(prompt("Veuillez saisir le solde en cours :"));

    // Tant que le solde le permet, demander au client s'il souhaite effectuer un retrait
    while (solde >= -decouvertAutorise) {
        let retrait = parseFloat(prompt("Veuillez saisir le montant du retrait (saisissez 0 pour quitter) :"));

        if (retrait === 0) {
            break; // Quitter la boucle si le client choisit de quitter
        } else if (retrait <= solde + decouvertAutorise) {
            solde -= retrait; // Déduire le montant du retrait du solde
            alert("Retrait effectué avec succès. Nouveau solde : " + solde + " Montant du découvert : " + decouvertAutorise);
        } else {
            alert("Solde insuffisant pour ce retrait.");
        }
    }

    // Afficher le nouveau solde et le montant du découvert ou "solde insuffisant"
    if (solde < 0) {
        alert("Solde insuffisant.");
    } else {
        alert("Opération terminée. Nouveau solde : " + solde + " Montant du découvert : " + decouvertAutorise);
    }
}

// Appeler la fonction pour démarrer la gestion des retraits
gererRetraits();
