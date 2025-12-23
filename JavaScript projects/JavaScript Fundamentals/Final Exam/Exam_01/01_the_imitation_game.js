function solve(input){
    let message = input.shift();
    let cmd = input.shift();

    while (cmd !== 'Decode'){
        let [action, ...flags] = cmd.split('|');
       
        if (action === 'Move'){
            let range = Number(flags.shift());
            message = message.substr(range, message.length) + message.substring(0, range);
        }else if(action === 'Insert'){
            let index = Number(flags.shift());
            let value = flags.shift();
            message = message.substr(0, index ) + value + message.substr(index, message.length);
        }else if(action === 'ChangeAll'){
            let substr = flags.shift();
            let replacement = flags.shift();
            //message = message.replaceAll(substr, replacement);
            message = message.split(substr).join(replacement);
        }
        cmd = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]);
solve([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);