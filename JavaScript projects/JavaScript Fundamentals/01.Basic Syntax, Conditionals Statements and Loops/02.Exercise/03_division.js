function divisible(number){
    let divisors = [10, 7, 6, 3, 2];
    let divisor;
    let divisorFound = false;
    
    for(let i = 0; i < divisors.length; i ++){
        divisor = divisors[i];
        if(number % divisor === 0){
            console.log(`The number is divisible by ${divisor}`);
            divisorFound = true;
            break;
        }
    }
    if(!divisorFound){
        console.log(`Not divisible`);
    }
}