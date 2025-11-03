function binToDec(binaryAsString){
    let number = 0;

    for (let i = 0; i < binaryAsString.length; i++){
        let value = Number(binaryAsString[i]);
        number += value * (Math.pow(2, binaryAsString.length - 1 - i)); 
    }

    console.log(number);
}

binToDec('00001001');
binToDec('11110000');