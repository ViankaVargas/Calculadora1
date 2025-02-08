// Esperamos a que todo el contenido del DOM se cargue
document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos las referencias a los elementos del HTML
  const number1Input = document.getElementById('number1');
  const number2Input = document.getElementById('number2');
  const resultValue = document.getElementById('result-value');
  const buttons = document.querySelectorAll('.buttons button');

  /**
   * Función calculate: Realiza la operación matemática seleccionada
   * @param {string} operation - Tipo de operación ('add', 'subtract', 'multiply', 'divide')
   */
  const calculate = (operation) => {
    // Convertimos los valores de los inputs a números
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    // Validamos que ambos inputs contengan números válidos
    if (isNaN(num1) || isNaN(num2)) {
      resultValue.textContent = 'Por favor ingresa números válidos';
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        // Evitamos la división por cero
        if (num2 === 0) {
          resultValue.textContent = 'Error: División por cero';
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultValue.textContent = 'Operación no válida';
        return;
    }

    // Mostramos el resultado en el HTML
    resultValue.textContent = result;
  };

  // Asignamos un evento 'click' a cada botón para detectar la operación
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Obtenemos la operación a realizar desde el atributo data-operation del botón
      const operation = button.getAttribute('data-operation');
      calculate(operation);
    });
  });
});
