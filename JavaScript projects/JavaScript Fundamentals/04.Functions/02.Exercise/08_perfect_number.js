function perfectNumber(number){

    if (number === sumPosDivisors(number)){
        return 'We have a perfect number!';
    }else{
        return `It's not so perfect.`;
    }

    function sumPosDivisors(number){
        let sum = 0;
        for (let i = 0; i <= (number/2); i++){
            if (number % i === 0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));
