function wordsToDigit(digitAsString){

    let digitAsInt;

    switch(digitAsString){
        case 'zero':
            digitAsInt = 0;
            break;
        case 'one':
            digitAsInt = 1;
            break;
        case 'two':
            digitAsInt = 2;
            break;
        case 'three':
            digitAsInt = 3;
            break;
        case 'four':
            digitAsInt = 4;
            break;
        case 'five':
            digitAsInt = 5;
            break;
        case 'six':
            digitAsInt = 6;
            break;
        case 'seven':
            digitAsInt = 7;
            break;
        case 'eight':
            digitAsInt = 8;
            break;
        case 'nine':
            digitAsInt = 9;
            break;
        default:
            break;
    }

    console.log(digitAsInt);

}

wordsToDigit('nine');
wordsToDigit('two');
wordsToDigit('zero');