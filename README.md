## Se proporciona una pagina web para validar los datos de tarjetas de crédito con el algoritmo de luhn el cual se detalla a continuación:

### El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

### Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

### ![gráfica de algoritmo de Luhn](./AlgoritmoLuhn.png)

### En base a lo anterior el usuario cuenta con una interfaz que le pide ingresar los datos de su tarjeta:

  > * Número de tarjeta el cual cuenta con un tope de 16 digitos.
  > * Fecha de vencimiento
  > * CVV el cual cuenta con un tope de 3 digitos

### La interfaz no le permitirá ejecutar la validaión si cuenta con algún campo vacío en caso de proceder con la validacion sin completar los campos, la pagina le mostrará un mesaje de alerta solicitando porfavor completar todos los campos, asi como tampoco podrá ingresar letras en lugar de números porque no se estará cumpliendo con el formato solicitado para ejecutar la validación.

### Una vez se proporcione la informacion solicitada se procederá con la validación donde se pueden presentar dos panoramas: Tarjeta Válida o Tarjeta Inválida, de acuerdo con la verificación aplicada según el algoritmo de luhn y para ambos escenarios se ocultarán los números de la tarjeta reemplazandolos por el simbolo `#` exceptuando los ultimos 4 digitos para mayor seguridad y confianza de usuario.