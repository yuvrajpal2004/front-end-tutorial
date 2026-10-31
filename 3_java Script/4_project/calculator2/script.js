const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');

let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let shouldResetScreen = false;

function clear() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    shouldResetScreen = false;
    updateDisplay();
}

function deleteNumber() {
    if (currentOperand === '0') return;
    if (currentOperand.length === 1) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

function appendNumber(number) {
    if (currentOperand === '0' || shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(selectedOperation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            if (current === 0) {
                alert('Cannot divide by zero');
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = parseFloat(computation.toFixed(10)).toString();
    operation = undefined;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

function updateDisplay() {
    currentOperandTextElement.textContent = formatNumber(currentOperand);
    if (operation != null) {
        previousOperandTextElement.textContent = 
            `${formatNumber(previousOperand)} ${operation}`;
    } else {
        previousOperandTextElement.textContent = '';
    }
}

function formatNumber(number) {
    if (number === '') return '';
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
        });
    }
    
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
    });
});

equalsButton.addEventListener('click', () => {
    compute();
});

clearButton.addEventListener('click', () => {
    clear();
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
});

decimalButton.addEventListener('click', () => {
    appendNumber('.');
});

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendNumber('.');
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        let operationSymbol = event.key;
        if (operationSymbol === '*') operationSymbol = '×';
        if (operationSymbol === '/') operationSymbol = '÷';
        chooseOperation(operationSymbol);
    } else if (event.key === 'Enter' || event.key === '=') {
        compute();
    } else if (event.key === 'Escape') {
        clear();
    } else if (event.key === 'Backspace') {
        deleteNumber();
    }
});