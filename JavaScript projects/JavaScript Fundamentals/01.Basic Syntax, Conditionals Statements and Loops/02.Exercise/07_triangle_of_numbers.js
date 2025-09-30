function traingle(number){
    for (let row = 1; row <= number; row++){
        for (let col = 1; col <= row; col++){
            process.stdout.write(`${row} `);
        }
        console.log(``);
    }

}