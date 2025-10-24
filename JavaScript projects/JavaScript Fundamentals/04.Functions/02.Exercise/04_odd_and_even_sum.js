function oddEvenSum(number){
    let evenSum = 0;
    let oddSum = 0;

    while(number > 0){
        let lastDigit = number % 10;

        addNumToSum(lastDigit);

        number = Math.trunc(number / 10);
    }

    function addNumToSum(number){
        if (number % 2 == 0){
            evenSum += number;
        }else{
            oddSum += number;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234));