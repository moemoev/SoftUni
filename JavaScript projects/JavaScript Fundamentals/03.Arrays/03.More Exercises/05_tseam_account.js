function tseamAcc(input){
    let games = input
                .shift()
                .split(" ");
    
    let commands = input
                .shift()
                .split(" ");
        
    while(commands[0] !== 'Play!'){

        let cmd = commands.shift();
        let game = commands.shift();

        if (cmd === 'Install' && !games.includes(game)){

            games.push(game);

        }else if (cmd === 'Uninstall' && games.includes(game)){

            deleteGame(game);

        }else if (cmd === 'Update' && games.includes(game)){

            deleteGame(game);
            games.push(game);

        }else if(cmd === 'Expansion' && games.includes(game.split("-")[0])){
            let expansion = game.split("-")[1];
            game = game.split("-")[0];
            let gamePosition = games.indexOf(game);
            games.splice(gamePosition + 1, 0, `${game}:${expansion}`);

        }

        commands = input
                .shift()
                .split(" ");
    }

    console.log(games.join(" "));


    function deleteGame(game){
            let gamePosition = games.indexOf(game);
            games.splice(gamePosition, 1);
    }
}

tseamAcc(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);
tseamAcc(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!']);