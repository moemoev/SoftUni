function addAndRemove(sequence){
    let output = [];

    for (let i = 0; i < sequence.length; i++){
        let cmd = sequence[i];

        if (cmd === 'add'){
            output.push(i + 1);
        }else{
            output.pop();
        }
    }
    if (output.length !== 0){
        console.log(output.join(" "));
    }else{
        console.log('Empty')
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);7