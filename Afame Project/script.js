let expression = '';

function appendInput(input) {
    expression += input;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    expression = '';
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}
