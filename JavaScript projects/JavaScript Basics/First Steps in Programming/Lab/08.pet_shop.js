function petShop(quantityDogFood, quantityCatFood){
    let priceDogFood = quantityDogFood * 2.5;
    let priceCatFood = quantityCatFood * 4;
    let totalPrice = priceCatFood + priceDogFood;
    console.log(`${totalPrice} lv.`);
}

petShop(5,4);