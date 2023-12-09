// Get the input field and buttons
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('#button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === '=') {
      // Evaluate the expression and display the result
      input.value = eval(input.value);
    } else if (buttonText === 'AC') {
      // Clear the input field
      input.value = '';
    } else {
      // Append the button's value to the input field
      input.value += buttonText;
    }
  });
});

