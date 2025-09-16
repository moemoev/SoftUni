function moving(input){
    let availibleSpace = input[0] * input[1] * input[2];
    let i = 3;
    let value = input[i];
    let enoughRoom = true;

    while (value != "Done"){
    
        value = Number(value);
        if (availibleSpace < value){
            enoughRoom = false;
            break;
        }

        availibleSpace -= value;
        i ++;
        value = input[i];
    }
    if (enoughRoom){
        console.log(`${availibleSpace} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${value - availibleSpace} Cubic meters more.`);
    }
}
moving(["10","10","2","20","20","20","20","122"]);
moving(["10","1","2","4","6","Done"]);