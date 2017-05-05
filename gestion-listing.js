//Evenement : clic sur le bouton ajouter :
let ajoutTache = document.querySelector("form");

//création des variables
let debute = true;
let listing = ""; //liste des tâches
let compteurID = 1; //compteur

ajoutTache.addEventListener("submit", function(e) {

    //Récupération du contenu des champs
    let ajoutTacheNom = document.getElementById('nomTache').value;
    let ajoutTacheDetail = document.getElementById('detailTache').value;

    //création d'une variable contenant la liste des tâches
    listing += '<div id="tache' + compteurID + '">' + ajoutTacheNom + ' : ' + ajoutTacheDetail + ' <button class="effacer">X</button></div>';
    compteurID++;

    //affichage de la liste dans la section
    document.getElementById('liste').innerHTML = listing;

    // DO NOT REMOVE...
    e.preventDefault();

    if (debute === true) {
        possibleSupprimer();
    }


});

let possibleSupprimer = function() {
    let supprTache = document.querySelector(".effacer");
    supprTache.addEventListener("click", function() {
        console.log(supprTache.parentNode);
        let cibleTache = supprTache.parentNode;
        cibleTache.remove();
    });
}