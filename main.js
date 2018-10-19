function verif_formulaire()
	
	{
	 if(document.formulaire.nom.value == "")  {
	   alert("Veuillez entrer votre nom!");
	   document.formulaire.nom.focus();
	   return false;
	  }
	 
	  if(document.formulaire.prenom.value == "")  {
	   alert("Veuillez entrer votre prenom!");
	   document.formulaire.nom.focus();
	   return false;
	  }
	
	 if(document.formulaire.courriel.value == "") {
	   alert("Veuillez entrer une adresse mail valide!");
	   document.formulaire.courriel.focus();
	   return false;
	  }
	 if(document.formulaire.courriel.value.indexOf('@') == -1) {
	   alert("Veuillez mettre l'@!");
	   document.formulaire.courriel.focus();
	   return false;
	  }
	 if(document.formulaire.age.value == "") {
	   alert("L'age doit être un nombre!");
	   document.formulaire.age.focus();
	   return false;
	  }
	 var nombre = 1;
	 for(i=0;i<document.formulaire.age.value.length;++i)
	   if(document.formulaire.age.value.charAt(i) < "1"
	   || document.formulaire.age.value.charAt(i) > "99")
		nombre = -1;
	 if(nombre == -1) {
	   alert("votre age n'est pas correcte veuillez mettre un nombre !!!");
		   document.formulaire.age.focus();
	   return false;
	   
	  }
	  
	 if(document.formulaire.message.value == ""){
	   alert("Votre message est trop court");
	   document.formulaire.message.focus();
	   return false;
	  }
	}