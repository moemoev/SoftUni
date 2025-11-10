function sumLastFirst(numbersArr){
    return Number(numbersArr.pop()) + Number(numbersArr.shift())
}
console.log(sumLastFirst(['20', '30', '40']));
console.log(sumLastFirst(['5', '10']));