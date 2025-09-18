function operations(numberOne, numberTwo, operator){
    let result;
    let parity;
    let division_is_valid = true;
    switch (operator){        
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            if (numberTwo != 0){
            result = numberOne * numberTwo;
            }else{
                result = 0;
                division_is_valid = false;
            }
            break;
        case "%":
            result = numberOne % numberTwo;
            break;
    }
    if (operator === "+" || operator === "-" || operator === "*"){
        if (result % 2 === 0){
            parity = "even";
        }else{
            parity = "odd";
        }
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${parity}`);
    }else if(operator === "%"){
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
    }else if(division_is_valid){
        console.log(`${numberOne} ${operator} ${numberTwo} = ${(result.toFixed(2))}`);
    }else{
        console.log(`Cannot divide ${numberOne} by zero`);
    }
}
operations(10,12,"+");