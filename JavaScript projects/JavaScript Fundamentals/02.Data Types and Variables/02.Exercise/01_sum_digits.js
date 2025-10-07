function sumDigits(number){
    let sum = 0;
    while(0 < number){
        sum += number % 10;
        number = Math.trunc(number / 10);
    }
    console.log(sum);
}