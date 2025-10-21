function signCheck(numOne, numTwo, numThree){

    let countNegNumbrs = 0;

    isNumPositive(numOne);
    isNumPositive(numTwo);
    isNumPositive(numThree);

    if (countNegNumbrs % 2 == 0){
        console.log('Positive')
    }else{
        console.log('Negative')
    }

    function isNumPositive(num){
        if (0 > num){
            countNegNumbrs++;
        }
    }    
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);