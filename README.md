## Pseudo código validar tarjeta.
+ DO. el prompt se repetirá hasta que la condición sea falsa. 
+ WHILE , la condición es que el usuario ingrese frase vacia.
+ Creo función isValidCard.
+ Creo array=[];
+ FOR recorre los números entregados por usuario.
+ Agrego N° entregados al array con unshift (parseInt(numbers.charAt(i)).
+ Creo array2=[];
+ For recorre array
+ Si posiciones numeros = par multiplicar x 2  push a array 2.
+ Posiciones impares push a array2
+ array3= Junto array2 con join (string), separo en string en array con split.
+ Creo sum=0;
+ For recorre array3
+ Sumo elementos array3 y guardo en sum
+ Si sum%10 = 0, felicitaciones tarjeta valida.
+ else tarjeta invalida.


#### Link Diagrama de flujo
[Imagen Diagrama de flujo](https://go.gliffy.com/go/share/se4ebpsc5x6iqj8o56ve)