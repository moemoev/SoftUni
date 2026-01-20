function solve(input){
    let message = input.shift();
    let cmd = input.shift();

    while (cmd !== 'Done'){
        cmd = cmd.split(' ');
        let action = cmd.shift();

        if (action === 'Change'){
            let char = cmd.shift();
            let replacement = cmd.shift();

            message = message.split(char).join(replacement);

            console.log(message);
        }else if (action === 'Includes'){
            let substring = cmd.shift();

            if (message.includes(substring)){
                console.log("True");
            }else{
                console.log("False");
            }

        }else if (action === 'End'){
            let substring = cmd.shift();
            let messageEnd = message.slice((message.length - substring.length));

            if(messageEnd === substring){
                console.log("True")
            }else{
                console.log("False")
            }

        }else if (action === 'Uppercase'){
            message = message.toUpperCase();

            console.log(message);

        }else if (action === 'FindIndex'){
            let char = cmd.shift();

            index = message.split('').indexOf(char);

            console.log(index);
        }else if (action === 'Cut'){
            let startIndex = Number(cmd.shift());
            let count = Number(cmd.shift());

            let cut = message.slice(startIndex, (startIndex + count)); 
            message = message.slice(0, startIndex) + message.slice(startIndex + count);

            console.log(cut);
        }

        cmd = input.shift();
    }
    

}

solve(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"]);

solve(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"]);