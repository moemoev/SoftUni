function sumNumbers(numbers){
    let number = Number(numbers[0]);
    let sumNumber = 0;
    let index = 1;

    while (sumNumber < number){
        sumNumber += Number(numbers[index]);
        index ++;
    }
    console.log(`${sumNumber}`);
}
sumNumbers(["100","10","20","30","40"]);