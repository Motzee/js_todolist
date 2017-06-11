/* VUE */
let boutonAjout = document.querySelector("form");

//récupération du contenu des champs pour créer un objet Tache à ajouter
function recupTacheAjoutable() {

    let tacheTitre = document.getElementById('nomTache').value;

    let tacheDetail = document.getElementById('detailTache').value;

    let tacheUrgence = document.getElementById('urgence').value;

    let tacheDomaine = document.getElementById('domaine').value;

    let tacheDuree = document.getElementById('duree').value;

    detailTache = {
        "titre": tacheTitre,
        "detail": tacheDetail,
        "urgence": tacheUrgence,
        "domaine": tacheDomaine,
        "duree": tacheDuree,
    }

    return detailTache;
}

//récupération de la liste d'une catégorie et conversion en tableau JS
function recupListe(categorie) {
    let listeDuneCategorie = localStorage.getItem(categorie);

    if (listeDuneCategorie == null) {
        listeDuneCategorie = [];
    } else {
        listeDuneCategorie = JSON.parse(listeDuneCategorie);
    }
    return listeDuneCategorie;
}


//conversion d'une liste en string et enregistrement dans le localStorage
function enregistreListe(categorie, nouvelleListe) {
    nouvelleListeString = JSON.stringify(nouvelleListe);
    localStorage.setItem(categorie, nouvelleListeString);
}


function afficheTaches(categorie) {
    //vidage de la zone
    document.getElementById(categorie).innerHTML = null;

    //création et insertion du titre
    let titreCategorie = document.createElement("h2");
    switch (categorie) {
        case "homing":
            titreCategorie.textContent = "Homing/Administratif";
            break;
        case "travail":
            titreCategorie.textContent = "Travail/Etudes";
            break;
        case "social":
            titreCategorie.textContent = "Social";
            break;
        case "loisirs":
            titreCategorie.textContent = "Loisirs";
            break;
    }

    document.getElementById(categorie).appendChild(titreCategorie);

    //récupération de la liste de la catégorie sous forme de tableau
    let listeTachesCateg = recupListe(categorie);

    //boucle pour afficher le contenu du tableau-liste de tâches
    for (let i = 0; i < listeTachesCateg.length; i++) {
        //création d'article pour une tâche
        let ajoutArticle = document.createElement("article");

        //création d'un séparateur
        let separateur = document.createElement("hr");
        separateur.className = "separe";

        //création d'une div pour l'urgence
        let urgence = document.createElement("div");

        switch (listeTachesCateg[i].urgence) {
            case "important":
                urgence.textContent = "!";
                urgence.className = "urgent-unpeu";
                break;
            case "urgent":
                urgence.textContent = "!";
                urgence.className = "urgent-tres";
                break;
            case "facultatif":
                urgence.textContent = "!";
                urgence.className = "urgent";
                break;
            default:
                urgence.textContent = "!";
                urgence.className = "urgent";
                break;
        }

        //création d'une div pour le pictogramme de catégorie
        let duree = document.createElement("img");
        duree.className = "duree";
        switch (listeTachesCateg[i].duree) {
            case "quinze":
                duree.src = "img/horloge_15min.png";
                break;
            case "trente":
                duree.src = "img/horloge_30min.png";
                break;
            case "heure":
                duree.src = "img/horloge_heure.png";
                break;
            case "deuxheures":
                duree.src = "img/2heures.png";
                break;
            case "demijour":
                duree.src = "img/demijour.png";
                break;
            case "jour":
                duree.src = "img/jour.png";
                break;
            case "plrsjours":
                duree.src = "img/plrsjours.png";
                break;
        }

        //création d'une div pour la tâche
        let ajoutDiv = document.createElement("div");
        ajoutDiv.className = "presenteTache";

        //création et remplissage bouton
        let boutonX = document.createElement("button");
        boutonX.textContent = "X";

        //Création et remplissage titre de tâche
        let ajoutTitre = document.createElement("h3");
        ajoutTitre.textContent = listeTachesCateg[i].titre + " : ";

        //création et remplissage p
        let ajoutP = document.createElement("p");
        ajoutP.textContent = listeTachesCateg[i].detail;

        /*//création et remplissage span pour date limite
        let ajoutDatelimite = document.createElement("span");
        ajoutDatelimite.textContent = "//" + "date limite";

        //remplissage du paragraphe de détail de la tâche
        ajoutP.appendChild(document.createElement("br"));
        ajoutP.appendChild(ajoutDatelimite);*/

        //remplissage de la div pour la tâche
        ajoutDiv.appendChild(boutonX);
        ajoutDiv.appendChild(ajoutTitre);
        ajoutDiv.appendChild(ajoutP);

        //remplissage de l'article
        ajoutArticle.appendChild(urgence);
        ajoutArticle.appendChild(duree);
        ajoutArticle.appendChild(ajoutDiv);


        //injection de l'article et d'un séparateur dans la page
        document.getElementById(categorie).appendChild(ajoutArticle);
        document.getElementById(categorie).appendChild(separateur);

        //préparation d'un bouton de suppressiion pour chaque tâche
        boutonX.addEventListener("click", function() {
            let idTableau = i;
            supprimeTache(categorie, idTableau);
        });
    }

}

//suppression d'une tâche
function supprimeTache(categorie, id) {
    //je récupère la liste de la catégorie, je la transforme en tableau JS
    let listingActuel = recupListe(categorie);

    //je tronque le fameux truc
    listingActuel.splice(id, 1);

    //je restocke le tout
    enregistreListe(categorie, listingActuel);

    //je recharge le truc
    afficheTaches(categorie);
}

/* MODELE */
//récupération de la catégorie d'une tâche
function recupCategorie(objetTache) {
    let categorie = objetTache['domaine'];
    return categorie;
}

//ajout de la tâche à la fin de la liste de la catégorie
function ajoutTache(tache, listeCateg) {
    listeCateg[listeCateg.length] = tache;
    return listeCateg;
}


/* CONTROLEUR */

//Evenement : chargement de la page
document.body.onload = function() {
    afficheTaches("homing");
    afficheTaches("travail");
    afficheTaches("social");
    afficheTaches("loisirs");
}


//Evenement : clic sur le bouton d'ajout d'une tâche
boutonAjout.addEventListener("submit", function(e) {

    e.preventDefault();

    //je récupère la catégorie de la tâche à ajouter
    let tacheAjoutable = recupTacheAjoutable();

    let categorie = recupCategorie(tacheAjoutable);
    console.log(categorie);

    let listeActuelle = recupListe(categorie);

    let nouvelleListe = ajoutTache(tacheAjoutable, listeActuelle);

    enregistreListe(categorie, nouvelleListe);

    afficheTaches(categorie);
});