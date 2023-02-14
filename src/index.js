import validator from './validator.js';
const input = document.getElementById('credit-card-input');
const button = document.getElementById('validate-button');
const output = document.getElementById('output');

button.addEventListener('click', function() {
  if (validator.isValid(input.value)) {
    output.innerHTML = `Tarjeta de crédito válida: ${validator.maskify(input.value)}`;
  } else {
    output.innerHTML = 'Tarjeta de crédito inválida';
  }
});
console.log(validator);
