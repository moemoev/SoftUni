function primeChecker(number){

    let isPrime = true;

    for (let i = 2; i < number; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }

    console.log(isPrime);
}

primeChecker(7);
primeChecker(8);
primeChecker(81);