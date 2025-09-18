function coins(value){
    let countCoins = 0;
    let addedCoins = 0;
    while (value != 0){
        switch(true){
            case (2 <= value):
                addedCoins = Math.trunc(value / 2);
                value -= (2 * addedCoins);
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (1 <= value):
                addedCoins = Math.trunc(value / 1);
                value -= 1 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (0.5 <= value):
                addedCoins = Math.trunc(value / 0.5);
                value -= 0.5 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (0.2 <= value):
                addedCoins = Math.trunc(value / 0.2);
                value -= 0.2 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;               
            case (0.1 <= value):
                addedCoins = Math.trunc(value / 0.1);
                value -= 0.1 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (0.05 <= value):
                addedCoins = Math.trunc(value / 0.05);
                value -= 0.05 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (0.02 <= value):
                addedCoins = Math.trunc(value / 0.02);
                value -= 0.02 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            case (0.01 <= value):
                addedCoins = Math.trunc(value / 0.01);
                value -= 0.01 * addedCoins;
                value = Number(value.toFixed(2));
                countCoins += addedCoins;
                break;
            default:
                break;
        }
    }
    console.log(countCoins);
}   
coins(1.23);   
coins(2);   
coins(0.56);   
coins(2.73);