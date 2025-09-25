function oddNumbers(countNumbers){
    let sumNumbers = 0;
    let oddNumber = 1;

    while(countNumbers > 0){
        sumNumbers += oddNumber;
        console.log(`${oddNumber}`);
        oddNumber += 2;
        countNumbers--;
    }
    console.log(`Sum: ${sumNumbers}`);
}