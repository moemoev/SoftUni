function fishingBoat(budget, season, members){
    let priceBoat;
    let discount;
    switch(season){
        case "Spring":
            priceBoat = 3000;
            break;
        case "Summer":
        case "Autumn":
            priceBoat = 4200;
            break;
        case "Winter":
            priceBoat = 2600;
            break;
    }
    if (members < 7){
        discount = 0.9;
    }else if (members < 12){
        discount = 0.85;
    }else{
        discount = 0.75;
    }
    let totalPrice = priceBoat * discount;
    if (members % 2 === 0 && season !== "Autumn"){
        totalPrice *= 0.95;
    }
    

    if (totalPrice <= budget){
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat();