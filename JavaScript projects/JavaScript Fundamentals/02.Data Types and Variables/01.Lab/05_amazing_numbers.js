function amazing(number){
    let sumDigits = 0;
    numberAsStr = String(number);
    let isAmazing= false;

    for(let i = 0; i < numberAsStr.length; i ++){
        sumDigits += Number(numberAsStr[i]);
    }

    sumDigitsAsStr = String(sumDigits);

    if(sumDigitsAsStr.includes('9')){
        isAmazing = true;
    }
    // My initial solution vs. the tutors 
    /*  
    for(let i = 0; i < sumDigitsAsStr.length; i++){
        if(sumDigitsAsStr[i] === '9'){
            isAmazing = true;
            break;
        }
    }
    */
    if(isAmazing){
        console.log(`${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`);
    }
}