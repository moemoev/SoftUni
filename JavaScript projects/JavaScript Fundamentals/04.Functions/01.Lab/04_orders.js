function printPriceOfOrder(product, count){
    let result;

    if (product === "coffee"){
        console.log(printPriceCoffee(count));
    }else if (product === "water"){
        console.log(printPriceWater(count));
    }else if (product === "coke"){
        console.log(printPriceCoke(count));
    }else if (product === "snacks"){
        console.log(printPriceSnacks(count));
    }

    function printPriceCoffee(count){
        return (count * 1.5).toFixed(2);
    }

    function printPriceWater(count){
        return(count * 1.00).toFixed(2);
    }

    function printPriceCoke(count){
        return (count * 1.40).toFixed(2);
    }

    function printPriceSnacks(count){
        return (count * 2.00).toFixed(2);
    }


}

printPriceOfOrder("water", 5);
printPriceOfOrder("coffee", 2);