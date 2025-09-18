function primeNonPrime(input){
    let index = 0;
    let cmd = input[index]
    let sumPrime = 0;
    let sumNonPrime = 0;
    let isPrime = true;
    
    while (cmd != "stop"){
        cmd = Number(cmd);
        if (cmd < 0){
            console.log(`Number is negative.`);
            index ++;
            cmd = input[index];
            continue;
        }else if (cmd === 1){
            sumNonPrime += cmd;
        }else{
            isPrime = true;
            for (let i = cmd - 1; i >= 2; i--){
                if ((cmd % i) === 0){
                    isPrime = false
                }
            }
        }
        if (isPrime){
            sumPrime += cmd;
        }else{
            sumNonPrime += cmd;
        }
        index ++;
        cmd = input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
primeNonPrime(["30","83","33","-1","20","stop"]);