function sumAndDetectType(firstNumber, secondNumber, thirdNumber){
    let result = firstNumber + secondNumber + thirdNumber;
    if(Number.isInteger(result)){
        console.log(`${result} - Integer`);
    }else if(typeof(result) === 'number' && !Number.isInteger(result)){
                console.log(`${result} - Float`);
    }
}