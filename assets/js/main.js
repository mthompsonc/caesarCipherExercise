// Esta función se encarga de preguntarle al usuario qué es lo que desea hacer, si no ingresa una respuesta válida, lanzará error y luego volverá a preguntarle.

function cipherCaesar() {
  var answer;
  do {
    answer = prompt('Si desea CIFRAR una frase, escriba 1. Si desea DESCIFRAR una frase, escriba 2');
    if (answer !== '') {
      if (answer === '1') {
        cipher();
      } else if (answer === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida');
      }
    }
  } while (answer === '' || (answer !== '1' && answer !== '2'));
  /*
  * Si el dato ingresado es diferente a 1, 2 o sin caracteres, volverá a lanzar el primer prompt.
  */
  function cipher() {
    // La función Cipher, se encargará de cifrar una frase con el método Cifrado César.
    var phraseCipher;
    // Esta variable contendrá la frase que ingrese el usuario para cifrar.
    /*
    * Do while hace que solo si se cumplen las condiciones de "Do", se dejará de repetir el ciclo.
    */
    do {
      phraseCipher = prompt('Por favor, escriba la frase (en minúsculas) que desea CIFRAR ');
    } while (phraseCipher === '');
    var answerCipherChar = /[a-zA-Z]/;
    // Agregando variable que contenga caracteres permitidos.
    var answerSpecialCharacter = /[ñ áéíóúäëïöüàèìòù_@$]/;
    // Agregando variable que contenga caracteres especiales.
    var arrayAscii = [];
    // Agregando variable array para que más adelante contenga la frase cifrada.
    var strCipher;
    // Agregando variable para que más adelante contenga el String de la frase cifrada.
    /*
    * Si el elemento que se encuentra en el índice i del ciclo for, es un caracter especial (nombrado anteriormente en la variabre answerSpecialCharacter), hará que se imprima en el array el mismo elemento. Sino, se le aplicará la fórmula y se imprimirá en el array de la frase cifrada.
    */
    for (var i = 0; i < phraseCipher.length; i++) {
      var codeAscii = phraseCipher.charCodeAt(i);
      console.log(codeAscii);
      if (answerSpecialCharacter.test(phraseCipher[i]) === true) {
        arrayAscii.push(phraseCipher[i]);
        console.log(arrayAscii);
      } else if (codeAscii >= 65 && codeAscii <= 90) {
        arrayAscii.push(String.fromCharCode((codeAscii - 65 + 33) % 26 + 65));
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        arrayAscii.push(String.fromCharCode((codeAscii - 97 + 33) % 26 + 97));
      }
    }
    strCipher = arrayAscii.join('');
    // Esta variable hará que la nueva frase cifrada, se junte para formar sólo un string.
    alert('Tu frase cifrada es ' + strCipher);
    // Este alert imprimirá en la web la prase cifrada.
  }

  function decipher() {
    // Esta función decifrará las frases anteriormente cifradas.
    var phraseDecipher;
    // Esta variable albergará la frase escrita en el prompt.
    do {
      phraseDecipher = prompt('Por favor, escriba la frase que desea DESCIFRAR');
    } while (phraseDecipher === '');
    
    var phraseDecipherChar = /[a-zA-Z]/;
    // Agregando variable que contenga caracteres permitidos.
    var phraseDecipherSpecialChar = /[ñ áéíóúäëïöüàèìòù_@$]/;
    // Agregando variable que contenga los caracteres especiales.
    var arrayAsciiD = [];
    // Agregando variable con un array vacío que contendrá la frase descifrada
    var strDecipher;
    // Esta variable contendrá el string con la frase descifrada.
    for (var i = 0; i < phraseDecipher.length; i++) {
      var phraseUpper = phraseDecipher.toUpperCase();
      // Esta variable contendrá la frase ingresada en el prompt y la convertirá a mayúsculas para que sea identificada como código Ascii y así logre convertirla.
      var codeAscii = phraseUpper.charCodeAt(i);
      if (phraseDecipherSpecialChar.test(phraseUpper[i])) {
        arrayAsciiD.push(phraseUpper[i]);
      } else if (phraseDecipherChar.test(phraseUpper[i])) {
        arrayAsciiD.push(String.fromCharCode((codeAscii - 65 - 7 + 52) % 26 + 65));
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        arrayAsciiC.push(String.fromCharCode((codeAscii - 97 - 7 + 52) % 26 + 97));
      } else {
        alert('La frase escrita no es válida');
      } 
      strDecipher = arrayAsciiD.join('').toLowerCase();
    }
    /*
    * Esta variable, juntará todas las letras del array y luego la convertirá en minúsculas.
    */
    alert('Tu frase descifrada es: ' + strDecipher);
  }
}

cipherCaesar();