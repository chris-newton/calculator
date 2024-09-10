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
    if (b === 0) {
        return "no.";
    }
    return a / b;
}

function operate(a, b, operator) {
    return operator(a, b);    
}

// given a new digit, updates and returns currValue
function updateDisplayValue(newDigit) {
    if (!currValue) {
        currValue = 0;
    }
    
    if (currValue === 0) {
        currValue = newDigit;
        return currValue; 
    }
    currValue = parseInt("" + currValue + newDigit);
    return currValue;
}

function clear() {
    currValue = 0;
    displayText.textContent = currValue;
}

let a;
let b;
let operator;
let currValue = 0;

const displayText = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalsButton = document.querySelector(".equals-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currValue = updateDisplayValue(parseInt(button.textContent));
        
        
        if (operator) {
            displayText.textContent += button.textContent;
        } else {
            displayText.textContent = currValue;
        }
    });
});

clearButton.addEventListener("click", clear);

// Once operator is clicked, we know the end of our first value (a), so
// we set it immediately
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator) { 
            return; // prevents multiple consecutive operator inputs
        }

        const operationText = button.textContent;
        a = currValue;
        currValue = undefined;
        
        switch (operationText) {
            case "+":
                operator = add;
                displayText.textContent += "+";
                break;
            case "-":
                operator = subtract;
                displayText.textContent += "-";
                break;
            case "×":
                operator = multiply;
                displayText.textContent += "×";
                break;
            case "÷":
                operator = divide;
                displayText.textContent += "÷";
                break;
        }
    });
});

// sets the second value (b) and executes operation
equalsButton.addEventListener("click", () => {
    // when equals is pressed with no operator, just evaluate to curr value
    if (operator === undefined) {
        return; 
    }

    b = currValue;
    currValue = operator(a, b)
    displayText.textContent = currValue;
    operator = undefined;
});