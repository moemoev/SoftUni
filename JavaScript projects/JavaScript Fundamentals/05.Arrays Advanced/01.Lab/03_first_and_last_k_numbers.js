function firsLastKEle(numbersArr){
    kElements = numbersArr.shift()
    firstNumbers = numbersArr.slice(0, kElements);
    lastNumbers = numbersArr.slice(numbersArr.length - kElements);

    console.log(`${firstNumbers.join(" ")}`);
    console.log(`${lastNumbers.join(" ")}`);
}

firsLastKEle([2,7, 8, 9]);
firsLastKEle([3, 6, 7, 8, 9]);
