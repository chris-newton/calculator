function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    return operator(a, b);    
}

// given a new digit, updates and returns displayValue
function updateDisplayValue(newDigit) {
    if (displayValue === 0) {
        displayValue = newDigit;
        return displayValue; 
    }
    displayValue = parseInt("" + displayValue + newDigit);
    return displayValue;
}

function clear() {
    displayValue = 0;
    displayText.textContent = displayValue;
}

let a;
let b;
let operator;
let displayValue = 0;

const displayText = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");
const operationButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue = updateDisplayValue(parseInt(button.textContent));
        displayText.textContent = displayValue;

    });
});

clearButton.addEventListener("click", () => {
    clear();
});

// Once operator is clicked, we know the end of our first value (a), so
// we set it immediately
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const operationText = button.textContent;
        a = displayValue;

        switch (operationText) {
            case "+":
                operator = add;

            case "-":
                operator = subtract;
            
            case "×":
                operator = multiply;
            
            case "÷":
                operator = divide;
        }
    });
});

