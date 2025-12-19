function expGained(input){
    
    let expNeeded = input.shift();
    let countBattles = input.shift();
    let expPlayer = 0;
    let takenBattles = 0;
    let playerSucceded = false;

    for (let i = 1; i <= countBattles; i++){
        let expThisRound = input.shift();

        if (i % 3 === 0){
            expThisRound *= 1.15;
        }else if (i % 5 === 0){
            expThisRound *= 0.9;
        }
        
        if(i % 15 === 0){
            expThisRound *= 1.05;
        }

        expPlayer += expThisRound;

        if (expNeeded <= expPlayer){
            takenBattles = i;
            playerSucceded = true;
            break;
        }
    }

    if (playerSucceded){
        console.log(`Player successfully collected his needed experience for ${takenBattles} battles.`);
    }else{
        console.log(`Player was not able to collect the needed experience, ${(expNeeded - expPlayer).toFixed(2)} more needed.`);
    }

}
expGained([500,5,50,100,200,100,30]);
expGained([500,5,50,100,200,100,20]);
expGained([400,5,50,100,200,100,20]);