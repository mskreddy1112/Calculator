let displayElement = document.getElementById('display');
let expression = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayElement.innerText = '';
        shouldResetDisplay = false;
    }
    displayElement.innerText += number;
    expression += number;
}

function setOperation(operation) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    displayElement.innerText += operation;
    expression += operation;
}

function calculate() {
    try {
        let result = eval(expression);
        displayElement.innerText = result;
        expression = result.toString();
        shouldResetDisplay = true;
    } catch (error) {
        displayElement.innerText = 'Error';
        expression = '';
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    displayElement.innerText = '0';
    expression = '';
}

function appendPercentage() {
    if (expression) {
        let result = eval(expression) / 100;
        displayElement.innerText = result;
        expression = result.toString();
        shouldResetDisplay = true;
    }
}
