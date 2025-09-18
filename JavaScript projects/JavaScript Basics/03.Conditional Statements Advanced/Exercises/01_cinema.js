function cinema(projection, rows, columns){
    let seats = rows * columns;
    let ticektPrice ;
    switch (projection){
        case "Premiere":
            ticektPrice = 12.00;
            break;
        case "Normal":
            ticektPrice = 7.50;
            break;
        case "Discount":
            ticektPrice = 5.00;
            break;
    }
    let totalPrice = ticektPrice * seats;
    console.log(`${(totalPrice).toFixed(2)} leva.`);
}
cinema("Premiere",10,12);