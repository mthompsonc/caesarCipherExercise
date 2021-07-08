# Código Cesar.

**Este código tiene la particularidad de cifrar y también descifrar frases que ingresa el usuario. Utilizando ASCII, que es una forma estándar de representar caracteres y símbolos de forma electrónica.**

#### Trabajo realizado por:
 "María Paz Thompson"



### Pseudo-Código.

1. Inicia con do que envía un prompt para que el usuario ingrese si desea cifrar o descifrar el número.

1. Si answer es 1, se ejecuta la función cipher, que incia con un prompt para preguntar la frase para cifrar, luego por un ciclo for, que va rotando palabra por palabra y luego va devolviendo la posición de cada letra en el código Ascii(.charCodeAt()), avanzando 33 posiciones, luego a través de String.fromCharCode devuelve las letras de las posiciones obtenidas anteriormente y a través de push, agrega el resultado a la variable result, y finalmente junta el resultado con join.

1. Si answer es 2 se ejecuta la función decipher, pregunta cuál es la frase que desea descifrar.

1. Si ingresa una frase o número y no es válido, el código lanza un alert "Ingrese una opción válida."

1. Si la respuesta del prompt está vacía o la respuesta es diferente a 1 o 2, continuará preguntando cuál es la acción que desea realizar.

### Flujo de Código.

![img](https://image.ibb.co/eWrYrw/Diagrama_de_flujo_Cesar.png)
