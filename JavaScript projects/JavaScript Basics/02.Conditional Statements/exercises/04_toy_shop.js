function toyShop(priceTrip, countPuzzles, countPuppets, countTeddys, countMinions, countTrucks){
    let totalPrice = countPuzzles * 2.6 + countPuppets * 3 + countTeddys * 4.1 + countMinions * 8.2 + countTrucks * 2;
    let finalPrice = 0;
    let countToys = countPuzzles + countPuppets + countTeddys + countMinions + countTrucks;
    if (50 <= countToys)
        totalPrice = totalPrice * 0.75;
    finalPrice = totalPrice * 0.9;
    if (priceTrip <= finalPrice)
        console.log(`Yes! ${(finalPrice - priceTrip).toFixed(2)} lv left.`);
    else
        console.log(`Not enough money! ${(priceTrip - finalPrice).toFixed(2)} lv needed.`);
}

toyShop(320,8,2,5,5,1);