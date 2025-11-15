function houseParty(input){
    let partyList = [];

    for(let command of input){
        let cmd = command.split(" ");
        let name = cmd[0];
        let isInList = partyList.includes(name);
        let action = cmd.slice(1).join(" ");

        if(action === 'is going!' && !isInList){
            partyList.push(name);        
        }else if(action === 'is going!' && isInList){
            console.log(`${name} is already in the list!`);
        }else if(action === 'is not going!' && !isInList){
            console.log(`${name} is not in the list!`);
        }else{
            partyList = partyList.filter(n => n !== name);
        }
    }
    return partyList
            .join(`\n`);
}
console.log(houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']));
console.log(houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']));