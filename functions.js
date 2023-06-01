// Declaración de variables y constantes.

var botonEncriptar = document.getElementById("botonEncriptar");

const textArea = document.getElementById("textoIngresado");

const rectangulo = document.getElementById("rectangulo");

const mensajeMostrar = document.querySelector(".mensajeEncriptado");

const mensajeOcultar = document.querySelector(".mensajeVacio");

const copia = document.querySelector(".copiar");


/*Se ocultan el botón de copia y el parrafo que mostrará el mensaje una vez encriptado
o desencriptado
*/
copia.style.display = "none";
mensajeMostrar.style.display = "none";

//Evento click del botón para encriptar el texto.
botonEncriptar.onclick = codificarString;


/*
función que dispara la encriptación del texto, la misma recorre el string ingresado mediante un ciclo for 
para luego llamar a la función que se encargará de reemplazar las vocales. Una vez encriptada la palabra modificará
los elementos del DOM para ocultar la imágen del muñeco en la sección de salida y habilitará el parrafo con el texto ya encriptado
y el botón para copiar el texto antes mencionado. 
*/
function codificarString(){

	var frase = textArea.value;

	if(!validarTexto(frase)){

		

		var palabraEncriptada = "";
		for(let i = 0; i < frase.length; i++){

			palabraEncriptada += reemplazarVocales(frase[i]);

		} 

		mensajeOcultar.style.display = "none";
		mensajeMostrar.style.display = "block";
		mensajeMostrar.textContent = palabraEncriptada;
		rectangulo.style.backgroundImage= "none";
		copia.style.display = "block";
	}


}

/*
Esta función reemplaza una letra siempre y cuando sea una vocal, por la clave de encriptación solicitada.
Laves de encriptacion
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

*/
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


/*
Función que desencriptará un mensaje, la misma transforma el string ingresado en un array para hacer uso del metodo splice
el cual se encargará de reemplazar la llave de encriptación por la vocal correspondiente para formar las palabras del mensaje.
Una vez realizada la transformación y haciendo uso de los elementos del DOM mostrará en pantalla un parrafo con el mensaje 
y el botón de copiar. 
*/
function decodificarString(){
	var texto = textArea.value;

	if(!validarTexto(texto)){
		let arreglo = Array.from(texto);

		for (let i = 0; i <= arreglo.length - 1; i++) {
			
			switch(arreglo[i]){
			case "a":
				arreglo.splice(i+1,1);
				break;
			case "e":
				arreglo.splice(i+1, 4);
				break;
			case "i":
				arreglo.splice(i+1, 3);
				break;
			case "o":
				arreglo.splice(i+1, 3);
				break;
			case "u":
				arreglo.splice(i+1, 3);
				break;
			}
		}

			texto = arreglo.join('');

			mensajeOcultar.style.display = "none";
			mensajeMostrar.style.display = "block";
			mensajeMostrar.textContent = texto;
			rectangulo.style.backgroundImage= "none";
			copia.style.display = "block";
	}
}

/*
Función que hace uso de una expresión regular para comprobar que el texto ingresado no posea caracteres especiales,
ni signos de puntuación. Devolviendo true en caso de poseer alguno de ellos junto a una ventana emergente avisando al usuario
que ha ingresado texto no válido.
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


/*
función que copia el texto del mensaje de salida(Encriptado o desencriptado, dependiendo de la acción realizada
con anterioridad por el usuario).
*/
function copiar(){

    navigator.clipboard.writeText(mensajeMostrar.innerHTML);
    mensajeMostrar.innerHTML = "";
    alert("Texto Copiado")
}

