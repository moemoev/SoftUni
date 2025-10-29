function lastDigit(number){
    let lastDigit = number % 10;
    let dict = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine', 
    }

    console.log(`${dict[lastDigit]}`)
}

lastDigit(512);
lastDigit(1);
lastDigit(1643);