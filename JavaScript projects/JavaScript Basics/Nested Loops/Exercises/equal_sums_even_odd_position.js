function equal_sums(firstN, secondN){
    let output = "";
    for (let i = firstN; i <= secondN; i++){
        let number = i.toString();
        let sumOdd = 0 ;
        let sumEven = 0;


        for (let k = number.length - 1; k >= 0; k--){
            if (k % 2 === 0){
                sumEven += Number(number[k]);
            }else{
                sumOdd += Number(number[k]);                
            }
        }

        if (sumEven === sumOdd){
            output += number + " ";
        }
    }
    console.log(output);
}
equal_sums(100000, 100050);