function afficheSaisie(){
	var champ = document.getElementById('nom');
	if(document.getElementById("age").value < 18){var old = "mineur"}else{var old = "majeur"}
	if(document.getElementById("form1").sexe[0].checked){var txt=""}else{var txt="e"}
	alert(champ.value + " : " + old+txt);
	for(var i=0; i < document.getElementById("son").value;i++){
		console.log("dring dring")
	}
}
