var answer;

function start(option){
  do{
    var answer = prompt("Ingrese el n"'u00fa'"mero de lo que desea hacer:\n 1. Cifrar una frase. \n 2. Descifrar una frase.");
      if(answer = ""){
        if(answer == "1"){
          return answer1;
        } else if(answer == "2") {
          return answer2;
        } else {
          alert("Ingrese una opción v"'u00e1'+"lida.");
        }
      }
  } while(respuesta == "" || (answer != "1" && answer != "2"));
}

function answer1

  function cipher(phrase){
      var result = [];
  var strCipher;
    for(var i=0; i< phrase.length; i++){
     result.push(String.fromCharCode(((phrase.charCodeAt(i)-65+33) % 26 + 65)));
    }
     strCipher = result.join('');
      return alert("Su c"+'u00f3'"digo es "+strCipher);
  }
