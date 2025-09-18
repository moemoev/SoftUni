function YardGreening(area){
    let priceGardening = area * 7.61;
    let discount = priceGardening * 0.18;
    let priceAfterDiscount = priceGardening - discount;
    console.log(`The final price is: ${priceAfterDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
YardGreening(550);