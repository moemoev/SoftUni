function toThePower(base, exponent){
    let result = 1;
    while(exponent > 0){
        result *= base;
        exponent --;
    }
    console.log(result);
}

toThePower(2, 8);
toThePower(3, 4);