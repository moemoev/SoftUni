function multTable(number){
    let firstDigit = Math.trunc(number / 100);
    let secondDigit = Math.trunc((number % 100) / 10);
    let thirdDigit = number % 10;

    for (let i = 1; i <= thirdDigit ; i++){
        for (let j = 1; j <= secondDigit; j++){
            for (let k = 1; k <= firstDigit; k++ ){
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`)
            }
        }
    }
}   
multTable(324);