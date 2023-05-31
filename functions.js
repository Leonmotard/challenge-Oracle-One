
var botonEncriptar = document.getElementById("botonEncriptar");

const textArea = document.getElementById("textoIngresado");

const rectangulo = document.getElementById("rectangulo");

const mensajeMostrar = document.querySelector(".mensajeEncriptado");

const mensajeOcultar = document.querySelector(".mensajeVacio");
/*
const mensaje = document.querySelector("#mensaje");

const parrafo = document.querySelector("#parrafoMensaje")
*/
const copia = document.querySelector(".copiar");
copia.style.display = "none";
mensajeMostrar.style.display = "none";

botonEncriptar.onclick = codificarString;

function codificarString(){

	var frase = textArea.value;

	if(!validarTexto(frase)){

		var palabraEncriptada = "";
		for(let i = 0; i < frase.length; i++){

			palabraEncriptada += reemplazarVocales(frase[i]);

		} 
		/*
		mensaje.textContent = palabraEncriptada;
		mensaje.classList.remove('mensajeHeader');
		*/
		mensajeOcultar.style.display = "none";
		mensajeMostrar.style.display = "block";
		mensajeMostrar.textContent = palabraEncriptada;
		rectangulo.style.backgroundImage= "none";
		//textArea.value="";
		copia.style.display = "block";
	}

	/*
	console.log(palabraEncriptada);
	*/
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

function decidificarString(texto){


}

/*
/\b[a-z]+\b/g  reconoce todas las palabras incluyendo espacios y saltos de linea, pero no signos de puntuación.
*/
function validarTexto(texto){

	let validador = texto.match(/\b[a-z]+\b/g);

	if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


