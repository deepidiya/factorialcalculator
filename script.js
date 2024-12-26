function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    let number = parseInt(numberInput);
    
    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    resultElement.textContent = `Factorial of ${number} is ${factorial}.`;
}
