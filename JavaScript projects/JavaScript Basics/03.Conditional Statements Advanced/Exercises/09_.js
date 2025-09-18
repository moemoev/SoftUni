function skiTrip(days, roomType, rating){
    let priceForTheStay;
    switch (roomType){
        case "room for one person":
            priceForTheStay = (days - 1) * 18.00;
        break;
        case "apartment":
            priceForTheStay = (days - 1) * 25;
            
            if (days < 10){
                priceForTheStay *= 0.7;
                }else if (days <= 15){
                priceForTheStay *= 0.65;
                }else {
                priceForTheStay *= 0.5;
                }
            break;
        case "president apartment":
            priceForTheStay = (days - 1) * 35;
            
            if (days < 10){
                priceForTheStay *= 0.9;
                }else if (days <= 15){
                priceForTheStay *= 0.85;
                }else {
                priceForTheStay *= 0.8;
                }
            break;
        default:
            break;
    }
    if (rating === "positive"){
        priceForTheStay *= 1.25 ;
    }else{
        priceForTheStay *= 0.9;
    }
    console.log(`${priceForTheStay.toFixed(2)}`)
}
skiTrip(30,"president apartment","negative");