function solve(input){
    let message = input.shift();
    let cmd = input.shift();

    while (cmd !== 'Reveal'){
        cmd = cmd.split(':|:');
        let action = cmd.shift();

        if (action === 'ChangeAll'){
            let substr = cmd.shift();
            let replacement = cmd.shift();

            message = message.split(substr).join(replacement);
            console.log(message);

        }else if (action === 'Reverse'){
            let substr = cmd.shift();

            if (!message.includes(substr)){
                console.log('error');
                cmd = input.shift();
                continue;
            }else{
                message = message.replace(substr, '') + substr.split('').reverse().join('');
                console.log(message);
            }
        }else if (action === 'InsertSpace'){
            let index = Number(cmd.shift());
            message = message.slice(0, index) + ' ' + message.slice(index, message.length);

            console.log(message);
        }

        cmd = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
]);

solve([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);