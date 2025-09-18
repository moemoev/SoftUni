function shopping(budget, countGpus, countCpus, countRam){
    let priceGpus = countGpus * 250;
    let priceCpus = priceGpus * 0.35 * countCpus;
    let priceRam = priceGpus * 0.1 * countRam;
    let totalPrice = priceGpus + priceCpus + priceRam;

    if (countCpus < countGpus)
        totalPrice *= 0.85;

    if (totalPrice <= budget){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(920.45, 3, 1, 1);