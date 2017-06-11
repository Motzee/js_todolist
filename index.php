<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <meta name="author" content="LaLicorne">
    <meta name="description" content="Créez et gérez votre todo liste dans votre navigateur, sans inscription" />
    <title>Todo Liste</title>
    <link rel="stylesheet" href="styles.css" />
    <!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
    <!--si t'es un vieux navigateur, t'as besoin de ça pour comprendre la nouvelle ossature de page issue de html5-->
</head>

<body>
    <aside id="ajout">
        <h1>Ajouter une tâche [+]</h1>
    
        <form method="POST" action="">
            <fieldset>
                <legend>Complétez les champs</legend>
                <p><label for="nomTache">Intitulé</label><br/>
                    <input id="nomTache" name="nomTache" type="text" required/></p>

                <p><label for="detailTache">Détails</label><br/>
                    <textarea id="detailTache" name="detailTache"></textarea></p>

                <p><label for="urgence">Degré d'urgence</label><br/>
                    <select name="urgence" id="urgence">
                        <option value="facultatif" >Facultatif</option>
                        <option value="normal" selected >Normal</option>
                        <option value="important">Important</option>
                        <option value="urgent">Maxi-urgent</option>
                    </select></p>

                <p><label for="domaine">Domaine</label><br/>
                    <select name="domaine" id="domaine" required>
                        <option value="homing" selected >Homing/Administratif</option>
                        <option value="travail">Travail/études</option>
                        <option value="social">Social</option>
                        <option value="loisirs">Loisirs</option>
                    </select></p>

                <p><label for="duree">Durée estimée</label><br/>
                    <select name="duree" id="duree">
                        <option value="quinze" selected >15 minutes</option>
                        <option value="trente">30 minutes</option>
                        <option value="heure">1h</option>
                        <option value="deuxheures">2h</option>
                        <option value="demijour">1/2 journée</option>
                        <option value="jour">1 journée</option>
                        <option value="plrsjours">plusieurs jours</option>
                    </select></p>

                <!--<p><label for="peremption">Date limite</label><br/>
                    <input id="peremption" name="peremption" type="date" /> </p>-->

                <p><input type="submit" value="Ajouter" /></p>

            </fieldset>
        </form>
        
    </aside>

    <main id="liste">
        <h1>To Do Liste [voir]</h1>
        <section id="homing"><h2>Homing/Administratif</h2></section>
        <section id="travail"><h2>Travail/Etudes</h2></section>
        <section id="social"><h2>Social</h2></section>
        <section id="loisirs"><h2>Loisirs</h2></section>
    </main>

    <footer><em>Attention : cette liste est conservée uniquement dans votre navigateur, en cas de nettoyage des caches de celui-ci, la liste disparaitra.</em></footer>

    <script type="text/javascript" src="script.js"></script>
</body>

</html>