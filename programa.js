
//Funcion mostrar resultado
function resultado(){
    var inputText = document.querySelector("#contenedor-captura").value;  
    if (inputText=== ""){
        document.getElementById("boton-copiar").style.display = "none";
        document.getElementById("dibujo").style.display ="block";
    } else{
        document.getElementById("boton-copiar").style.display = "block";
        document.getElementById("dibujo").style.display = "none";
    }



}
/**Función para quitar la imagen **/
function quitarImagen() {
    document.getElementById("dibujo").style.display = "none";

  }



function encriptar (){
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#contenedor-captura").value;
    if (texto == ""){
        alert("Lo siento, pero no debe estar vacío.");
        

    } else if (texto.match(caracteres) != texto.match(caracteres)){
        alert("El texto no puede contener Mayusculas acentos ni caracteres especiales.");
    } else{
        
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#contenedor-captura").value;
        
        
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("btn-copy").style.visibility = "visible";
        
        quitarImagen();
        
      
    }
    }



    
var boton1 = document.querySelector("#botn1"); boton1.onclick = encriptar;

function desencriptar (){
    
     var texto = document.querySelector("#contenedor-captura").value; 
     var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
     document.querySelector(".text-input-salida").value = textoCifrado; 
     document.querySelector("#contenedor-captura").value;
     
     document.getElementById("msg").style.visibility = "visible";
     document.getElementById("btn-copy").style.visibility = "visible";
     
}
var boton2 = document.querySelector("#botn2"); 
boton2.onclick = desencriptar;


/*COPIAR TEXTO */

function copiarTexto(){
    //Obtenemos el campo de texto.
    var copiar = document.getElementById("msg");
    //Selecionamos el campo de texto.
    copiar.select();
    copiar.setSelectionRange(0, 99999); //Rango para moviles.
    //Copia aquello que se encuentra dentro del campo de texto.
    navigator.clipboard.writeText(copiar.value);
    
    //Alerta de validación de la copia del texto.
    alert("Se copio el texto:  " + copiar.value);
    console.log(alert);
}

// Asignación del boton copiar 
var botonCopiar = document.querySelector("#btn-copy");
// Acción al dar un clic al boton copiar con la función copiar. 
botonCopiar.onclick = copiarTexto;
