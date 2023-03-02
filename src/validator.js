const validator = {
  //aplicando algoritmo de luhn
  isValid: (numero) => {
    //obteniendo la reversa del numero a traves de un array
    const array = numero.split("").reverse();
    //console.log(array);
    //se declaran las variable de los valores que necesitamos obtener
    let impares = 0;
    let paresMultiplicados = 0;
    let suma2Digitos = 0;

    //tomando los numeros en las posiciones impares
    for (let i = 0; i < array.length; i++) {
      if (i % 2 !== 1) {
        //si la posicion es impar
        impares += parseInt(array[i]);
      } else {
        //si la posicion es par
        const multiplicacion = array[i] * 2;
        if (multiplicacion >= 10) {
          const digito1 = parseInt(multiplicacion.toString().charAt(0));
          const digito2 = parseInt(multiplicacion.toString().charAt(1));
          suma2Digitos += digito1 + digito2;
        } else {
          paresMultiplicados += multiplicacion;
        }
      }
    }

    const sumaTotal = impares + paresMultiplicados + suma2Digitos;

    return (sumaTotal % 10 === 0)
  },
  
  maskify: (numero) => {
    const mascara = numero.slice(0, -4).replace(/./g, "#") + numero.slice(-4);
    console.log(mascara);
    return mascara;
  },
};

export default validator;
