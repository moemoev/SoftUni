function fruitShop(fruit, day, quantity){
    let price;
    if (day === "Saturday" || day === "Sunday"){
        switch(fruit){
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.6;
                break;
            case "kiwi":
                price = 3.0;
                break;
            case "pineapple":
                price = 5.6;
                break;
            case "grapes":
                price = 4.2;
                break;
            default:
                price = -1;
        }
    }else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day == "Friday"){
                switch(fruit){
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.2;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.7;
                break;
            case "pineapple":
                price = 5.5;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                price = -1;
        }
    }else{
        price = -1;
    }
    if (0 < price) 
        console.log((price * quantity).toFixed(2));
    else
        console.log("error");
}
fruitShop("apple","shit",2);