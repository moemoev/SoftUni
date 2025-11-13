function arrManipulation(input){
    let numbers = input
                    .shift()
                    .split(" ")
                    .map(Number);

    for(let command of input){
        let cmd = command.split(" ");
        let cmdName = cmd.shift();
        
        if (cmdName === 'Add'){
            let cmdValue = Number(cmd.shift());

            numbers.push(cmdValue);
        
        }else if(cmdName === 'Remove'){
            let cmdValue = Number(cmd.shift());

            numbers = numbers.filter(n => n != cmdValue);

        }else if(cmdName === 'RemoveAt'){
            let cmdIndex = Number(cmd.shift());

            numbers.splice(cmdIndex, 1);
        
        }else if(cmdName === 'Insert'){
            let cmdValue = Number(cmd.shift());
            let cmdIndex = Number(cmd.shift());

            numbers.splice(cmdIndex, 0, cmdValue);
        }
    }

    console.log(`${numbers.join(" ")}`);
}
arrManipulation(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
arrManipulation(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);