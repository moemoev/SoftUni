function foodDelivery(chicken, fish, vegetarian){
    let priceChicken = chicken * 10.35;
    let priceFish = fish * 12.40;
    let priceVegetarian = vegetarian * 8.15;
    let sumMenus = priceChicken + priceFish+ priceVegetarian;
    let priceDesert= sumMenus * 0.2;
    let deliveryFee = 2.5;
    let totalSum = sumMenus + priceDesert + deliveryFee;
    console.log(`${totalSum}`);
}

foodDelivery(2,4,3);