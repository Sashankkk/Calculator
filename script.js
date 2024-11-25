let currentInput = '';
let resultDisplayed = false;

function input(value) {
  const display = document.getElementById('display');
  if (resultDisplayed) {
    if (isNaN(value)) {
      currentInput = display.textContent;
    } else {
      currentInput = '';
    }
    resultDisplayed = false;
  }
  currentInput += value;
  display.textContent = currentInput || '0';
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').textContent = '0';
}

function calculate() {
  try {
    const display = document.getElementById('display');
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
    resultDisplayed = true;
  } catch (e) {
    document.getElementById('display').textContent = 'Error';
    resultDisplayed = true;
  }
}
