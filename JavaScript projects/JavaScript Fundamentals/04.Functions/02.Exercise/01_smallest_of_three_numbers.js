function smallestNumber(numOne, numTwo, numThree){
    let minNum = numOne;

    compareNums(minNum, numTwo);
    compareNums(minNum, numThree);

    console.log(`${minNum}`)

    function compareNums(first, second){
        if (first < second){
            minNum = first;
        }else{
            minNum = second
        }
    }
};


smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);
smallestNumber(25, 21, 4);
smallestNumber(2, 2, 2);