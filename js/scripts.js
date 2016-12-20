



function validate () {

    error();

    var siErreur = 0;
	var nom = document.forms["valForm"]["nom"].value;
	var prenom = document.forms["valForm"]["prenom"].value;
	var mdp = document.forms["valForm"]["motdepasse"].value;


    if (nom == ""){
        document.getElementsByClassName("c1")[0].style.display= "block" ;

        siErreur = 1;
    }

    if (prenom == ""){
		document.getElementById("c2").style.display= "block"  ;
        siErreur = 1;
    }
 
    if (mdp == "" ){
		document.getElementById("c3").style.display= "block" ;
        siErreur = 1;
    }


    if (mdp.indexOf("@") == -1) {
    	document.getElementById("c4").style.display= "block";
        siErreur = 1;
    }

 
    //@todo : boucle pour tester si le mdp contient un nombre 
    var compteur = false;
     for (i=0;i<=9;i++){
        if (mdp.indexOf(i) != -1) {
            compteur=true;
            break;
        };
    }
    if (!compteur) {
            document.getElementById("c5").style.display= "block";
        }



    if(siErreur==1){
         event.preventDefault();
    }
  

function error(){
    document.getElementsByClassName("c1")[0].style.display= "none" ;
    document.getElementById("c2").style.display= "none" ;
    document.getElementById("c3").style.display= "none" ;
    document.getElementById("c4").style.display= "none";
        document.getElementById("c5").style.display= "none";
}


}