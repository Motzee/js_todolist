//variables pré-établies
let listeTaches = []; //liste des tâches
let tacheID = 0; //id de la prochaine tâche inscrite



/* CONTROLEUR  d'événements */
//lors d'un clic sur le bouton ajouter : on récupère le contenu du formulaire et on appelle la fonction d'ajout avec
let boutonAjout = document.querySelector("form");
boutonAjout.addEventListener("submit", function(e) {
    //empêcher la redirection vers action
    e.preventDefault();

    let tacheTitre = document.getElementById('nomTache').value;
    let tacheDetail = document.getElementById('detailTache').value;

    ajoutTache(tacheID, tacheTitre, tacheDetail);

    tacheID++;

    //pour test :
    afficheTaches(listeTaches);
    //fin pour test
});


//lors d'un clic sur un bouton de suppression : on récupère l'id du bouton et on appelle la fonction de suppression
let boutonSuppr = document.querySelectorAll("button");
boutonSuppr.addEventListener("click", function(e) {
    let idSupprime = ;
    /*
    document.getElementById('detailTache')
    target, id*/

    supprimeTache(listeTaches, idSupprime);

    //pour test :
    afficheTaches(listeTaches);
    //fin pour test
});


/* FONCTIONS du MODELE */
//Ajout d'une tâche
function ajoutTache(id, titre, detail) {
    listeTaches[id] = {
        id: id,
        titre: titre,
        detail: detail
    }
    console.log("Tâche ajoutée");
}

//Suppression d'une tâche
function supprimeTache(tableau, id) {
    tableau.splice(id, 1);
    console.log("Tâche supprimée");
}

//Affichage de la liste
function afficheTaches(tableau) {
    for (key in tableau) {
        console.log(tableau[key]);
    }
}
/*
ajoutTache(42, "Titre 42", "Détail 42") ;
ajoutTache(1, "Titre 1", "Détail 1") ;
ajoutTache(2, "Titre 2", "Détail 2") ;
ajoutTache(3, "Titre 3", "Détail 3") ;

afficheTaches(listeTaches)

supprimeTache(listeTaches, 2)

*/