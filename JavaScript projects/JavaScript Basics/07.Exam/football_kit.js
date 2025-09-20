function soccerGear(priceShirt, presentTreshhold){
    let priceShorts = priceShirt * 0.75;
    let priceSocks = priceShorts * 0.2;
    let priceShoes = 2* (priceShirt + priceShorts);
    let totalPrice = 0.85 * (priceShirt + priceShorts + priceSocks + priceShoes);

    if (presentTreshhold <= totalPrice){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(presentTreshhold - totalPrice).toFixed(2)} lv. more.`);
    }
}
soccerGear(25, 100);
soccerGear(55, 310);