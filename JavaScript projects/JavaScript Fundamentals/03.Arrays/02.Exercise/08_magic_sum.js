function magicSum(numbers, sum){

    let numberPairs = [];

    for (let i = 0; i < numbers.length - 1; i++){
    
        for (let k = i + 1; k < numbers.length; k++){
            if ((numbers[i] + numbers[k]) === sum){
                numberPairs.push([numbers[i], numbers[k]])
            }
        }
    
        }
    for (let i = 0; i < numberPairs.length; i++){
    console.log(numberPairs[i].join(' '));
    }
}
magicSum([1, 7, 6, 2, 19, 23],8);
magicSum([14, 20, 60, 13, 7, 19, 8],27);
magicSum([1, 2, 3, 4, 5, 6],6);