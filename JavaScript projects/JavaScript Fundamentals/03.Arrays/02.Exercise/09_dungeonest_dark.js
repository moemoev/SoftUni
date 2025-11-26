function dungeon(input){

    let gamePlan = input.split('|');
    let nuberRooms = gamePlan.length;
    let totalCoins = 0;
    let health = 100;
    let lostGame = false;

    while (gamePlan.length !== 0){
        let cmd = gamePlan
                    .shift()
                    .split(' ');

        let action = cmd.shift();
        let value = Number(cmd.shift());

        if (action === 'potion'){

            let healthHealed = 0;

            if ((health + value) > 100){
                healthHealed = 100 - health;
                health = 100;

            }else{
                healthHealed = value;
                health += value;
            }
            console.log(`You healed for ${healthHealed} hp.`);
            console.log(`Current health: ${health} hp.`);

        }else if (action === 'chest'){
            
            totalCoins += value;

            console.log(`You found ${value} coins.`);
        }else {
            if (value >= health){
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${nuberRooms - gamePlan.length}`);
                lostGame = true;
                break;
            }

            health -= value;
            
            console.log(`You slayed ${action}.`);
        }
    }
    
    if (!lostGame){
        console.log(`You've made it!`);
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }

}
dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");