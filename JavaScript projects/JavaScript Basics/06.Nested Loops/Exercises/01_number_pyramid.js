function pyramid(number){
    let row = 1;
    let n = 1;
    let output = "";

    while (n != (number + 1)){
        for (let col = 1; col <= row; col++){
            output += `${n} `
            n++;
        if (n === (number +1))break;
        }
        row ++;
        output += `\n`
    }
    console.log(output)
}
pyramid(7);
pyramid(12);
pyramid(15);