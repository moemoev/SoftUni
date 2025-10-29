function sortNumbers(first, second, third){
    let numbers = [];
    numbers.push(first);
    numbers.push(second);
    numbers.push(third);

    numbers.sort((a, b) => b - a);

    console.log(numbers.join('\n'));

}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);