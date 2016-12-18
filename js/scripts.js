



function validate () {


	var nom = document.forms["valForm"]["nom"].value;
	var prenom = document.forms["valForm"]["prenom"].value;
	var mdp = document.forms["valForm"]["motdepasse"].value;
  

    if (nom == ""){
    	document.getElementById("c1").style.display= "Block" ;

    }else{
    	document.getElementById("c1").style.display= "none" ;
    }

    if (prenom == ""){
		document.getElementById("c2").style.display= "Block"  ;
    }
    else{
    	document.getElementById("c2").style.display= "none" ;
    }

    if (mdp == "" ){
		document.getElementById("c3").style.display= "Block" ;
    }
    else{
    	document.getElementById("c3").style.display= "none" ;
    }

    if (mdp.indexOf("@") == -1) {
    	document.getElementById("c4").style.display= "Block";
    }else{
    	document.getElementById("c4").style.display= "none";
    }

   document.location.href="confirmation.html";

event.preventDefault();
}