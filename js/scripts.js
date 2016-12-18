



function validate () {
	 var nom = document.forms["valForm"]["nom"].value;
	 var prenom = document.forms["valForm"]["prenom"].value;
	 var mdp = document.forms["valForm"]["motdepasse"].value;
	 var erreur = document.getElementsByTagName('small').style.display="block";
	
    if ( (nom == "") || (prenom == "") || (mdp == "") ){
       
    }
}