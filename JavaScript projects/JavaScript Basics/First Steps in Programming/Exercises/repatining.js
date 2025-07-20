function repainting(plastic, paint, thinner, hours){
    let pricePlastic = plastic * 1.5 + 3.0;
    let pricePaint = paint * 14.5 * 1.1;
    let priceThinner = thinner * 5.0;
    let priceHours = hours;
    let priceMaterial = pricePlastic + pricePaint + priceThinner + 0.4;
    let priceWork = priceMaterial * 0.3 * hours;
    let totalSum = priceMaterial + priceWork;
    console.log(`${totalSum}`);
}

repainting(10,11,4 ,8);