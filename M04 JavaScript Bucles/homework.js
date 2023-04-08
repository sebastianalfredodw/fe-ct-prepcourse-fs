/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    if (x > y) {
        console.log("El valor mas grande es X: ");
    } else if
        (y > x) {
        console.log("El valor mas grande es Y: ");
    }
    else console.log("Son iguales");
} obtenerMayor(8, 5); // El valor mas grande es x



function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if (edad >= 18) {
        console.log("Allowed")
    } else
        console.log("Not Allowed");

} mayoriaDeEdad(34); // Muestra el string "Allowed" al tener mayoriadeedad.


function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:\
    if (status === 1) {
        console.log("Online")
    } else if (status === 2) {
        console.log("Away")
    } else
        console.log("Offline")
    return status;
} conection(1); // Al tener valor 1 conection, asume que esta conectado.



function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    if (idioma === "aleman") {
        console.log("Guten Tag!")
    } else if (idioma === "mandarin") {
        console.log("Ni Hao!")
    } else if (idioma === "ingles") {
        console.log("Hello!")
    } else {
        console.log("Hola!")
    }
    return idioma;

} saludo("aleman");



function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
    switch (color) {
        case 'blue':
            console.log("This is blue");
            break;
        case 'red':
            console.log("This is red");
            break;
        case 'green':
            console.log("This is green");
            break;
        case 'orange':
            console.log("This is orange");
            break;
        default:
            console.log("Color not found");
    }
    return color;
} colors("yellow");



function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
    if (num === 10 || num === 5) {
        console.log("El valor es true"); // le agregue console.log para no perderme
        return true;
    } else
        return false;
} esDiezOCinco(10); // retorna que el valor es 'true' al terner la funcion el valor 10


function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:
    if (num < 50 && num > 20) {
        return true;
    } else
        return false;
} estaEnRango(30); // ya que el valor de "estaEnRango" esta dentro del rango de la condicion se retorna un true



function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 1 === 0) {
        return true;
        //comprobando que el resto de la división del numero a analizar entre 1 sea igual a 0
        // lo que indicaría que es un numero entero.
    } else
        return false;
} esEntero(3.5)
// como el numero a analizar es 3.5 nos retorna un false.
// siendo el numero a analizar entero sin decimales seria true.


function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else if (num % 3 && num % 5) {
        return "fizzbuzz";
    } else
        return false;
} fizzBuzz(15);
// siendo 15 el valor de fizzbuzz y cumple con la tercera condicion, no la toma en cuenta
// ya que pasa por la primera condicion, y como se cumple en esa primera instancia
// abandola el programa e ignora el resto de condiciones.


function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
    if (num1 > num2 && num1 > num3 && num1 > 0) {
        return "Numero 1 es mayor y positivo";
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        return "hay negativos";
    } else if (num3 > num1 && num3 > num2) {
        num3 = num3 + 1;
        return num3;
    } else if (num1 === 0 && num2 === 0 && num3 === 0) {
        return "Error";
    } else
        return false;
} operadoresLogicos(0, 0, 0); // en este caso retorna error ya que sus 3 valores son 0



function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num === 0 || num === 1 || num === 4) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
} esPrimo(97);
// el valor retorna true ya que 97 es numero primo 
//solo se divide por 97 y por si mismo.



function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:
    if (valor == + true) {
        return "Soy verdadero";
    } else
        return "Soy falso";
} esVerdadero(true);



function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    if (num >= 100) {
        return true;
    } else {
        return false;
    }
} tieneTresDigitos(100);

function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    let contador = 8; // le vamos restando 1
    let resultado = 0;
    
do{
    resultado += 5;
    contador -= 1;
}while (contador!== 0)

return num + resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
