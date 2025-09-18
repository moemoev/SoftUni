function hotelRoom(month, countNights){
    let pricePerNightStudio;
    let discountStudio = 1;
    let pricePerNightApatment;
    let discountApartment = 1;


    switch(month){
        case "May":
        case "October":
            pricePerNightStudio = 50;
            pricePerNightApatment = 65;

            if (7 < countNights && countNights <= 14){
                discountStudio = 0.95;
            }else if (14 < countNights){
                discountStudio = 0.7;
                discountApartment = 0.9;
            }
            break;
        case "June":
        case "September":
            pricePerNightStudio = 75.2;;
            pricePerNightApatment = 68.7;

            if (14 < countNights){
                discountStudio = 0.8;
                discountApartment = 0.9;
            }
            break;
        case "July":
        case "August":
            pricePerNightStudio = 76;;
            pricePerNightApatment = 77;

            if (14 < countNights){
                discountApartment = 0.9;
            }

            break;
    }
    let totalPriceStudio = countNights * pricePerNightStudio * discountStudio;
    let totalPriceApartment = countNights * pricePerNightApatment * discountApartment;

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom("May",15);