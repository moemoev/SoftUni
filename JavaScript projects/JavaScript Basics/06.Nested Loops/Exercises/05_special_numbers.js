function specialNumber(number){
    let output = "";
    
    for (let i = 1111; i <= 9999; i++){
        let isSpecialNumber = true;
        let indexableNumber = i.toString()

        for (let k = 0; k < indexableNumber.length; k++)
            if (number % indexableNumber[k] != 0){
                isSpecialNumber = false;
            }
        if (isSpecialNumber){
            output += indexableNumber + " ";
        }
    }
    console.log(output);
}
specialNumber(3);
specialNumber(11);
specialNumber(16);