//Déclaration de variables
let listing = []; //liste des tâches
let idTache = 0;
let ajoutTache = document.querySelector("form");

//Evenement : clic sur bouton Ajouter = ajout 
ajoutTache.addEventListener("submit", function(e) {

    //Récupération du contenu des champs
    let ajoutTacheNom = document.getElementById('nomTache').value;
    let ajoutTacheDetail = document.getElementById('detailTache').value;

    //ajout de l'entrée dans le listing
    listing[idTache] = {
        id: idTache,
        titre: ajoutTacheNom,
        detail: ajoutTacheDetail
    }

    //affichage du listing dans la section
    document.getElementById('liste').innerHTML = afficherListe();

    //incrémentation de l'id pour la prochaine tâche
    idTache++;

    // DO NOT REMOVE...
    e.preventDefault();

    possibleSupprimer();

});


//fonction : affichage de liste
let afficherListe = function() {

    let laListe = "";
    let tacheHTML = "";

    //parcourir le tableau numéroté listing
    listing.forEach(function(tacheTabAssociatif) {
        //là, j'ai une tâche (dans un tableau associatif), et je vais rédiger sa ligne html
        tacheHTML = '<div id="' + tacheTabAssociatif["id"] + '">' + tacheTabAssociatif["titre"] + '<strong> :</strong> ' + tacheTabAssociatif["detail"] + ' <button class="effacer">X</button></div>';

        //ajouter à laListe
        laListe += tacheHTML;
    });

    //renvoyer laListe
    return laListe;
}

//Evenement : clic sur bouton de suppression
/*
let possibleSupprimer = function() {
    let supprTache = document.querySelectorAll(".effacer");
    //on récupère un tableau
    supprTache.forEach(function(unBouton) {
        console.log(unBouton)
            /*unBouton.addEventListener("click", function() {
                console.log("demande de suppression");
            });*/

//Je récupère l'id du parent
//let idSuppr = supprTache.parentNode ;

/*
        listing.splice(1, 1);

        document.getElementById('liste').innerHTML = afficherListe();
    });
}*/