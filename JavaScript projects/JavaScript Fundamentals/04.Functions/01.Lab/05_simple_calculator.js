function simpleCalculator(firstNumber, secondNumber, operator){
    let result;

    if (operator === 'multiply'){
        result = (x, y) => x * y;
    }else if (operator === 'divide'){
        result = (x, y) => x / y;
    }else if (operator === 'add'){
        result = (x, y) => x + y;
    }else if (operator === 'subtract'){
        result = (x, y) => x - y;
    }

    return result(firstNumber, secondNumber);
}
console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));