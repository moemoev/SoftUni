function godzillaVsKong(budget, countBackgroundActors, priceEquipment){
    let priceScenery = budget * 0.1;
    let totalPriceEquipment = countBackgroundActors * priceEquipment;
    if (150 < countBackgroundActors)
        totalPriceEquipment *= 0.9;
    let totalSumCosts = priceScenery + totalPriceEquipment;
    if (totalSumCosts <= budget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalSumCosts).toFixed(2)} leva left.`);
        }else{
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${(totalSumCosts - budget).toFixed(2)} leva more.`);
        }
}
godzillaVsKong(9587.88,222,55.68);