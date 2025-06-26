function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        let product = multiply(num1, num2);
        let quotient = divide(num1, num2);
        let sum = add(num1, num2);
        let difference = subtract(num1, num2)

        displayResult(product, 'product');
        displayResult(quotient, 'quotient')
        displayResult(sum, 'sum')
        displayResult(difference, 'difference')
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    debugger;

    return a * b;
}

function divide(a, b) {
    debugger;

    return a / b;
}

function add(a, b) {
    debugger;

    return a + b;
}

function subtract(a, b) {
    debugger;

    return a - b;
}

function displayResult(result, operation) {
    const resultElement = document.getElementById(operation);
    resultElement.textContent = `The ${operation} is: ${result}`;
}