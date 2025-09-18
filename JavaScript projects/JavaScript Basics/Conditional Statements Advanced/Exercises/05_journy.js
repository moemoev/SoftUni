function journy(budget, season){
    let destination;
    let typeVacation;
    let totalPrice;

    if (season === "summer"){
        typeVacation = "Camp";
    }else
        typeVacation = "Hotel";

    if (budget <= 100){
        destination = "Bulgaria"
        switch(season){
            case "summer":
                totalPrice = budget * 0.3;
                break;
            case "winter":
                totalPrice = budget * 0.7;
                break;
        }
    }else if (budget <= 1000){
        {
        destination = "Balkans"
        switch(season){
            case "summer":
                totalPrice = budget * 0.4;
                break;
            case "winter":
                totalPrice = budget * 0.8;
                break;
        }
    }
    }else{
        destination = "Europe";
        totalPrice = budget * 0.9;
        typeVacation = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeVacation} - ${(totalPrice).toFixed(2)}`);
}
journy(312,"summer");