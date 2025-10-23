function sumAndSubtract(first, second, third){

    let sum = (x, y) => x + y;
    let sub = (x, y) => x - y;

    let sumResult = sum(first, second);
    return sub(sumResult, third); 
}

console.log(sumAndSubtract(23, 6, 10));
console.log(sumAndSubtract(1, 17, 30));
console.log(sumAndSubtract(42, 58, 100));
