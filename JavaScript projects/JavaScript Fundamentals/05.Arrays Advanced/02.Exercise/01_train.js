function train(input){
    let wagons = input
                .shift()
                .split(" ")
                .map(n => Number(n));

    let wagonCapacity = Number(input.shift());
    
    for(let command of input){
        let cmd = command.split(" ");

        if(cmd[0] === 'Add'){
            let passengers = Number(cmd[1]);
            wagons.push(passengers);
        }else{
            let passengers = Number(cmd[0]);
            let wagon = wagons.findIndex(n => n + passengers <= wagonCapacity)
            if (wagon != -1){
            wagons[wagon] += passengers;
            }    
        
        }

    }

    return wagons.join(" ");
}

console.log(train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']));
console.log(train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']));