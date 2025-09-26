function rounding(number, precision){
    if(15 < precision){
        precision = 15;
    }
    number = number.toFixed(precision);
    console.log(`${parseFloat(number)}`);

}
