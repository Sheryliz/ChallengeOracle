
function Encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var mensaje1 = document.getElementById ("mensaje1");
    var mensaje2 = document.getElementById ("mensaje2");
    var munheco = document.getElementById ("munheco");

    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "ines");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    if (texto.length != 0) {
        document.getElementById("inputTexto").value = txtCifrado;
        mensaje1.textContent = "Texto encriptado con éxito";
        mensaje2.textContent = "";
        munheco.src = "img/encriptado.jpg";
      } else {
        munheco.src = "img/munheco.svg";
        mensaje1.textContent = "Ningún mensaje fue encontrado";
        mensaje2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
      }
}

function Desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var mensaje1 = document.getElementById ("mensaje1");
    var mensaje2 = document.getElementById ("mensaje2");
    var munheco = document.getElementById ("munheco");
    
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/ines/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");


if (texto.length != 0) {
    document.getElementById("inputTexto").value = txtCifrado;
    mensaje1.textContent = "Texto desencriptado con éxito";
    mensaje2.textContent = "";
    munheco.src = "img/desencriptado.jpg";
  } else {
    munheco.src = "img/munheco.svg";
    mensaje1.textContent = "Ningún mensaje fue encontrado";
    mensaje2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}
