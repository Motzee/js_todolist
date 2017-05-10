//variables pré-établies
let listeTaches = []; //liste des tâches

/* CONTROLEUR  d'événements */
//lors d'un clic sur le bouton ajouter : on récupère le contenu du formulaire et on appelle la fonction d'ajout avec
let boutonAjout = document.querySelector("form");
boutonAjout.addEventListener("submit", function(e) {
    //empêcher la redirection vers action
    e.preventDefault();

    let tacheTitre = document.getElementById('nomTache').value;
    let tacheDetail = document.getElementById('detailTache').value;

    ajoutTache(tacheTitre, tacheDetail);

});


/* FONCTIONS du MODELE */

//Ajout d'une tâche
function ajoutTache(titre, detail) {
    listeTaches[listeTaches.length] = {
        titre: titre,
        detail: detail
    }
    console.log("Tâche ajoutée");
    afficheTaches(listeTaches);
}

//suppression d'une tâche
function supprimeTache(tableau, id) {
    tableau.splice(id, 1);
    console.log("Tâche supprimée");
    afficheTaches(listeTaches);
}


//affichage de la liste des tâches
function afficheTaches(tableau) {
    //vidage de la zone
    document.getElementById("liste").innerHTML = null;

    //réécriture de la liste
    for (let valeur of tableau) {
        //création div
        let ajoutDiv = document.createElement("div");

        //Création et remplissage strong
        let ajoutStrong = document.createElement("strong");
        ajoutStrong.textContent = valeur['titre'] + " : ";

        //création et remplissage span
        let ajoutSpan = document.createElement("span");
        ajoutSpan.textContent = valeur['detail'] + " ";

        //création et remplissage bouton
        let boutonX = document.createElement("button");
        boutonX.textContent = "X";

        //ajout strong, span et bouton dans div
        ajoutDiv.appendChild(ajoutStrong);
        ajoutDiv.appendChild(ajoutSpan);
        ajoutDiv.appendChild(boutonX);

        //injection de div dans la page
        document.getElementById("liste").appendChild(ajoutDiv);

        //création de l'événement sur le truc
        boutonX.addEventListener("click", function() {

            //ici*
            supprimeTache(listeTaches, 2);
        });

    }
}

/*
A finir : ici*
Trouve rle moyen de récupérer le numéro d'entrée du truc cliqué, ou mettre un id, ou un autre truc...
*/