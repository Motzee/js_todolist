//Evenement : clic sur le bouton ajouter :
let ajoutTache = document.querySelector("form");

let listing = "";

ajoutTache.addEventListener("submit", function(e) {
    //Récupération du contenu des champs
    let ajoutTacheNom = document.getElementById('nomTache').value;
    let ajoutTacheDetail = document.getElementById('detailTache').value;

    //création d'une variable contenant la liste des tâches

    listing += ajoutTacheNom + " : " + ajoutTacheDetail + "<br/>";

    //affichage de la liste dans la section
    document.getElementById('liste').innerHTML = listing;

    // DO NOT REMOVE...
    e.preventDefault();
});


//Evenement : clic sur un bouton de suppression d'une tâche