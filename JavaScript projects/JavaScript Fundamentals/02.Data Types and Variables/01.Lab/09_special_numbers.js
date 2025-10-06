function special(number){
    for(let i= 1; i <= number; i++){
        let iAsString = String(i);
        let iSumDigits = 0;

        for(let k = 0; k < iAsString.length; k++){
            iSumDigits += Number(iAsString[k])
        }
        if(iSumDigits === 5 || iSumDigits === 7 || iSumDigits === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        
    }
}