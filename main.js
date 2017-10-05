var answer = prompt("Ingrese el n\u00famero de lo que desea hacer:\n 1. Cifrar una frase. \n 2. Descifrar una frase.");
var phrase = "";
function start(option){
  do{
      if(answer = ""){
        if(answer == "1"){
          phrase = prompt("Ingrese la frase que desea cifrar.")
          return cipher;
        } else if(answer == "2") {
          phrase = prompt("Ingrese la frase que desea descifrar.")
          return decipher;
        } else {
          alert("Ingrese una opción v\u00e1lida.");
        }
      }
  } while(respuesta == "" || (answer != "1" && answer != "2"));//si el dato ingresado es diferente a 1 o a 2, volverá a lanzar el primer prompt.
}

  function cipher(phrase){
    var result = [];
    var strCipher;
    if (phrase.length === 0 || typeof(phrase) == "number"){ //se comprueba que el dato ingresado sea un string
      alert("Input no v\u00e1lido")
    }else{
    for(var i=0; i< phrase.length; i++){
      result.push(String.fromCharCode(((phrase.charCodeAt(i)-65+33) % 26 + 65)));
    }
     strCipher = result.join('');
      return alert("Su c\u00f3digo cifrado es "+strCipher);
  }
}
function decipher(phrase){
  var result1 = [];
  var strDecipher;
  if(phrase.length === 0 || typeof(phrase) == "number"){//si el caracter ingresado es igual a 0 o es de tipo number, lanzará error.
    alert("Input no v\u00e1lido");
  } else{
    for (var i= 0; i<phrase.length; i++){
      result1.push(String.fromCharCode((phrase.charCodeAt(i)-65-7+52) %26 +65));
      strDecipher = result1.join(' ');
      return alert("Su c\u00f3digo descifrado es "+strDecipher);
    }
  }
}
