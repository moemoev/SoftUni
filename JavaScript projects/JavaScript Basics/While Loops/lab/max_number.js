function maxNumber(input){
    let index = 0;
    let value = Number(input[0]);
    let maxNumber = Number(input[0]);

    while (value != "Stop"){
        if(maxNumber < value){
            maxNumber = Number(value);
        }
        index ++;
        value = input[index];
    }
    console.log(`${maxNumber}`)
}
maxNumber(["45", "-20", "7", "99", "Stop"]);