function tradeCommissions(city, sells){
    let is_invalid = false;
    let commission;
    switch (city){
        case "Sofia":
            if (0 <= sells && sells <= 500){
                commission = 0.05;
            }else if(500 < sells && sells <= 1000){
                commission = 0.07;
            }else if(1000 < sells && sells <= 10000){
                commission = 0.08;
            }else if (10000 < sells){
                commission = 0.12;
            }else{
                is_invalid = true;
            }
            break;
        case "Varna":
            if (0 <= sells && sells <= 500){
                commission = 0.045;
            }else if(500 < sells && sells <= 1000){
                commission = 0.075;
            }else if(1000 < sells && sells <= 10000){
                commission = 0.1;
            }else if (10000 < sells){
                commission = 0.13;
            }else{
                is_invalid = true;
            }
            break;
        case "Plovdiv":
            if (0 <= sells && sells <= 500){
                commission = 0.055;
            }else if(500 < sells && sells <= 1000){
                commission = 0.08;
            }else if(1000 < sells && sells <= 10000){
                commission = 0.12;
            }else if (10000 < sells){
                commission = 0.145;
            }else{
                is_invalid = true;
            }
            break;
        default:
            is_invalid = true;
    }
    if (!is_invalid){
    console.log((sells * commission).toFixed(2));
    }else{
        console.log("error");
    }
}
tradeCommissions("Plovdiv", 499.99);