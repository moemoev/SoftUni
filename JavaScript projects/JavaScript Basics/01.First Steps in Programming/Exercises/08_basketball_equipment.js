function basketball_equpipment(trainingFee){
    let priceSneakers = trainingFee * 0.6;
    let priceClothes = priceSneakers * 0.8;
    let priceBasketball = priceClothes * 0.25;
    let priceAsseciories = priceBasketball * 0.2;
    let totalSum = trainingFee + priceSneakers + priceClothes + priceBasketball + priceAsseciories;
    console.log(`${totalSum}`);
}

basketball_equpipment(365);