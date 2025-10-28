function mining(input){
    let valueBitcoin = 11949.16;
    let valueGold = 67.51;
    let dayFirstBitcoin = null;
    let bitcoins = 0;
    let money = 0;
    let gold = 0;
    let day = 1;

    while(input.length !== 0){

        if(day % 3 === 0){
            gold = Number(input.shift()) * 0.7;
        }else{
            gold = Number(input.shift());
        }

        money +=  gold * valueGold;

        if (money >= valueBitcoin){

            let purchaseBitcoins = Math.floor(money / valueBitcoin);
            bitcoins += purchaseBitcoins;
            money -= purchaseBitcoins * valueBitcoin;
  
            if (dayFirstBitcoin=== null){
                dayFirstBitcoin = day;
            }
        }    

        day++;
    }
    
    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if (dayFirstBitcoin!== null){
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

mining([100, 200, 300]);
mining([50, 100]);
mining([3124.15, 504.212, 2511.124]);