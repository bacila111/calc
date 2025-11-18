let display = document.getElementById('display');

function appendNumber(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
