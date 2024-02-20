function saisirMontantDecouvert() {
    let montantDecouvert = prompt("Veuillez saisir le montant du découvert autorisé (si aucun, saisissez 0) :");

    // Vérifier si la valeur saisie est un nombre valide
    if (!isNaN(montantDecouvert)) {
        montantDecouvert = parseFloat(montantDecouvert); // Convertir la saisie en nombre à virgule flottante

        // Vérifier si le montant est positif ou nul
        if (montantDecouvert >= 0) {
            alert("Le montant du découvert autorisé est : " + montantDecouvert);
        } else {
            alert("Le montant du découvert autorisé ne peut pas être négatif.");
        }
    } else {
        alert("Veuillez saisir un montant valide.");
    }
}
console.log(saisirMontantDecouvert())