function minNumbers(input){
    let index = 0;
    let value = input[0];
    let minNumber = Number(input[0]);

    while(value != "Stop"){
        value = Number(value); 
        if ( value < minNumber){
            minNumber = value;
        }
        index ++;
        value = input[index]
    }
    console.log(minNumber)
}
minNumbers(["100","99","80","70","Stop"]);