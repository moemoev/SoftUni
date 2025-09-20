function excursionSale(input){
    let countSea = input[0];
    let countMountain = input[1];
    let profit = 0;
    let index = 2;
    let cmd = input[index];
    let everythingSold = false;

    while (cmd != "Stop"){
        if (cmd === "sea"){
            if (countSea != 0){
                countSea --;
                profit += 680;
            }
        }else if(cmd === "mountain"){
            if (countMountain != 0){
                countMountain --;
                profit += 499;
            }
        }
        
        if ((countMountain === 0) & (countSea === 0)){
            everythingSold = true;
            break;
        }
    
    index ++;
    cmd = input[index];
    }
    if (everythingSold){
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${profit} leva.`);
    }else{
        console.log(`Profit: ${profit} leva.`);
    }
}
excursionSale(["2","2","sea","mountain","sea","sea","mountain"]);
excursionSale(["6","3","sea","mountain","mountain","mountain","sea","Stop"]);