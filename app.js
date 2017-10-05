

do{ 
var targetNumber=prompt("Ingresa los números de tu tarjeta");} //Hacer prompt mientras targetNumber se encuentre vacio.

while (targetNumber==="") 


var isValidCard=function(numbers){

var array=[]; //creo un array vacio en donde voy a guardar los números que el usuario me da,pero en inversa.

  for(var i=0;i<numbers.length;i++){ //con el unshift ingreso lo números en reversa, ocupo el charAt para obtener número por número y como estan en string ...
    array.unshift(parseInt(numbers.charAt(i)));// los convierto a number con el parseInt.
  
  }
var array2=[]; //creo un nuevo array en donde voy a guardar mis números con posiciones pares multiplicados por dos y 
  for (var j=0; j<array.length;j++){ //tambien voy a guardar los otros números en posiciones impares, pero sin multiplicar.
   
    if(j%2!==0){ //para agregar a mi array solo los numeros de posiciones pares.
          array2.push(array[j]*2);} //posiciones pares multiplico por 2 y agrego a mi array2.
    else {
          array2.push(array[j]); // posiciones impares simplemente las agrego a mi array2 SIN multiplicar por 2.
    }
  }

var array3=(array2.join("")).split(""); /*convierto en string mi array con un join y los separo en un nuevo array con el split.
                                        es necesario separar todos los números para sumar los doble dígitos que quedaron 
                                        producto de la multiplicación de los números en posición par.*/
var sum=0;  //contador 

  for(var u=0;u<array3.length;u++){ //creo un for para ir sumando los elementos de mi array3
    sum+=(parseInt(array3[u])); //voy sumando los elementos de mi array3

}

  if(sum%10===0){     //si  sum  modulo de 10 es igual a 0 , entonces la tarjeta es válida.
    return document.write("Felicitaciones su Tarjeta es válida!!!!!");
  }else {
    return document.write("Lo lamentamos , su Tarjeta no es válida");//si la condición no se cumple entonces la tarjeta es invalida.
  }
}
  
isValidCard(targetNumber)  //llamo a la función con el parámetro targetNumber.



