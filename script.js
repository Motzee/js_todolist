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
        detail: detail,





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

    //création et insertion du titre
    let titreToDoListe = document.createElement("h1");
    titreToDoListe.textContent = "To Do Liste";
    document.getElementById("liste").appendChild(titreToDoListe);

    for (let i = 0; i < tableau.length; i++) {

        //création d'article pour une tâche
        let ajoutArticle = document.createElement("article");

        //création d'un séparateur
        let separateur = document.createElement("hr");
        separateur.className = "separe";

        //création d'une div pour l'urgence
        let urgence = document.createElement("div");
        urgence.className = "urgent";
        urgence.textContent = "!"; //si c'ets urgent marquer !, sinon vide

        //création d'une div pour le pictogramme de catégorie
        let catego = document.createElement("div");
        catego.className = "catego";
        catego.textContent = "[joli]"; //contiendra en fait une image (à ajouter, lien en fonction de la catégorie)

        //création d'une div pour la tâche
        let ajoutDiv = document.createElement("div");
        ajoutDiv.className = "presenteTache";

        //création et remplissage bouton
        let boutonX = document.createElement("button");
        boutonX.textContent = "X";

        //Création et remplissage titre de tâche
        let ajoutTitre = document.createElement("h2");
        ajoutTitre.textContent = tableau[i].titre + " : ";

        //création et remplissage p
        let ajoutP = document.createElement("p");
        ajoutP.textContent = tableau[i].detail;

        //création et remplissage span pour date limite
        let ajoutDatelimite = document.createElement("span");
        ajoutDatelimite.textContent = "//" + "date limite";

        //remplissage du paragraphe de détail de la tâche
        ajoutP.appendChild(document.createElement("br"));
        ajoutP.appendChild(ajoutDatelimite);

        //remplissage de la div pour la tâche
        ajoutDiv.appendChild(boutonX);
        ajoutDiv.appendChild(ajoutTitre);
        ajoutDiv.appendChild(ajoutP);

        //remplissage de l'article
        ajoutArticle.appendChild(urgence);
        ajoutArticle.appendChild(catego);
        ajoutArticle.appendChild(ajoutDiv);


        //injection de l'article et d'un séparateur dans la page
        document.getElementById("liste").appendChild(ajoutArticle);
        document.getElementById("liste").appendChild(separateur);

        boutonX.addEventListener("click", function() {
            let idTableau = i;
            supprimeTache(listeTaches, idTableau);
        });
    }

}