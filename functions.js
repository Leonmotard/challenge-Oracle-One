

function codificarString(){

	var frase = document.getElementById("textoIngresado").value;
	var palabraEncriptada = "";
	for(let i = 0; i < frase.length; i++){

		palabraEncriptada += reemplazarVocales(frase[i]);

	}

	console.log(palabraEncriptada);
}

function reemplazarVocales(letra){

	switch(letra){
		case "a":
			return "ai";
			break;
		case "e":
			return "enter";
			break;
		case "i":
			return "imes";
		case "o":
			return "ober";
			break;
		case "u":
			return "ufat";
			break;
		default:
			return letra;
	}
}


