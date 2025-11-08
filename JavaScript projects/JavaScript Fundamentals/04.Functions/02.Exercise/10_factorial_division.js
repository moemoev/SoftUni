function factorialDivision(first, second){
    let result = calcFactorial(first) / calcFactorial(second);

    return `${result.toFixed(2)}`


    function calcFactorial(number){
        let result = 1;

        while(0 < number){
            result *= number;
            number--;
        }
        return result
    }
}
console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));