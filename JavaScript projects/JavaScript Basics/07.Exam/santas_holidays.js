function santasHoliday(stayedDays, roomType, feedBack){
    let price;
    let sleepOvers = stayedDays - 1;

    if (roomType === "room for one person"){
        switch(true){
            case (sleepOvers < 10):
                price = sleepOvers * 18.00 
                break;
            case (sleepOvers <= 15):
                price = sleepOvers * 18.00 
                break;
            case (15 < sleepOvers):
                price = sleepOvers * 18.00 
                break;
            default:
                break;
        }   
    }else if (roomType === "apartment"){
        switch(true){
            case (sleepOvers < 10):
                price = sleepOvers * 25.00  * 0.7
                break;
            case (sleepOvers <= 15):
                price = sleepOvers * 25.00 * 0.65
                break;
            case (15 < sleepOvers):
                price = sleepOvers * 25.00 * 0.5
                break;
            default:
                break;
        }
    }else{
        switch(true){
            case (sleepOvers < 10):
                price = sleepOvers * 35.00 * 0.9
                break;
            case (sleepOvers <= 15):
                price = sleepOvers * 35.00 * 0.85
                break;
            case (15 < sleepOvers):
                price = sleepOvers * 35.00 * 0.8
                break;
            default:
                break;

        }
    }
    let finalPrice;

    if (feedBack === "positive"){
        finalPrice = price * 1.25
    }else{
        finalPrice = price * 0.9
    }

    console.log(`${finalPrice.toFixed(2)}`)
}
santasHoliday(30, "president apartment","negative");