function sequence(number){
    let sumSequence = 1;

    while (sumSequence <= number){
        console.log(`${sumSequence}`);
        sumSequence = 2 * sumSequence + 1;
    }   

}
sequence(17);