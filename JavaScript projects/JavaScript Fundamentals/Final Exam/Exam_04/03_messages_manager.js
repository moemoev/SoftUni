function solve(input){
    let maxCapacity = Number(input.shift());
    let messages = new Map();
    let cmd = input.shift();

    while (cmd !== 'Statistics'){
        cmd = cmd.split('=');
        let action = cmd.shift();

        if(action === 'Add'){
            let username = cmd.shift();
            let sent = Number(cmd.shift());
            let received = Number(cmd.shift());

            if (messages.has(username)){
                cmd = input.shift();
                continue
            }

            let messageObj = {
                sent: sent,
                received: received
            }

            messages.set(username, messageObj);

        }else if(action === 'Message'){
            let sender = cmd.shift();
            let receiver = cmd.shift();

            if(!(messages.has(sender) && messages.has(receiver))){
                cmd = input.shift();
                continue
            }

            messages.get(sender).sent += 1;
            messages.get(receiver).received += 1;

            let totalMessages = messages.get(sender).sent + messages.get(sender).received;
            if (totalMessages === maxCapacity){
                messages.delete(sender);
                console.log(`${sender} reached the capacity!`)
                //cmd = input.shift();
                //continue
            }
            
            totalMessages = messages.get(receiver).sent + messages.get(receiver).received;
            if (totalMessages === maxCapacity){
                messages.delete(receiver);
                console.log(`${receiver} reached the capacity!`)
                //cmd = input.shift();
                //continue
            }

        }else if(action === 'Empty'){
            let username = cmd.shift();

            if (messages.has(username)){
                messages.delete(username)
            }else if(username === 'All')
                messages.clear();
        }
        cmd = input.shift();
    }

    console.log(`Users count: ${messages.size}`);
    for( let user of messages.keys()){
        let numberMessages = messages.get(user).sent + messages.get(user).received;

        console.log(`${user} - ${numberMessages}`);
    }

}

solve(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Calvin",
"Message=Berg=Kevin",
//"Add=Mark=5=4",
"Statistics"]);
/*
solve(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);

solve(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);

solve(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);*/