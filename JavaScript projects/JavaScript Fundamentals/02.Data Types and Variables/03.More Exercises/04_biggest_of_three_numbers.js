function biggestNumber(first, second, third){
    let numbers = [];
    numbers.push(first);
    numbers.push(second);
    numbers.push(third);

    numbers.sort((a, b) => a - b);

    console.log(numbers.pop());

}

biggestNumber(-2, 7, 3);
biggestNumber(130, 5, 99);
biggestNumber(43, 43.2, 43.1);
biggestNumber(2, 2, 2);