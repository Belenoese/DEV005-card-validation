import validator from "./validator.js";
const validar = document.getElementById("validar-tarjeta");

//se llama a la funcion del validator.js
validar.addEventListener("click", (event) => {
  const numeroDeTarjeta = document.getElementById("numero-tarjeta");
  const fechaVencimieno = document.getElementById("fecha-vencimiento");
  const codigoVerificacion = document.getElementById("codigo-verificacion");

  if (
    numeroDeTarjeta.value === "" ||
    fechaVencimieno.value === "" ||
    codigoVerificacion.value === ""
  ) {
    event.preventDefault();
    alert("Por favor complete todos los campos!");
  } else {
    const resultado = validator.isValid(numeroDeTarjeta.value);
    //console.log (resultado)
    if (resultado === true) {
      document.getElementById("resultado").innerHTML = "Tarjeta Válida";
    } else {
      document.getElementById("resultado").innerHTML = "Tarjeta Inválida";
    }

    console.log(resultado);

    document.getElementById("informacionDeTarjeta").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("ocultarNumeros").textContent =
      validator.maskify(numeroDeTarjeta.value);
  }
});

console.log(validator);
