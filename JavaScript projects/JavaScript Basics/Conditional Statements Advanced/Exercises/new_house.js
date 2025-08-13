function newHouse(flower, quantity, budget){
    let price;
    let discount = 1; 
    if (flower == "Roses"){
        price = 5.0;
        if (80 < quantity){
            discount = 0.9;
        }
    }else if (flower == "Dahlias"){
        price = 3.8;
        if (90 < quantity){
            discount = 0.85;
        }
    }else if (flower == "Tulips"){
        price = 2.8;
        if (80 < quantity){
            discount = 0.85;
        }
    }else if (flower == "Narcissus"){
        price = 3.0;
        if (quantity < 120){
            discount = 1.15;
        }
    }else if (flower == "Gladiolus"){
        price = 2.5;
        if (quantity < 80){
            discount = 1.2;
        }
    }
    let totalPrice = quantity * price * discount;
    if (totalPrice <= budget){
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}
newHouse("Tulips",88,260);