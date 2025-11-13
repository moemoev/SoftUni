function listProducts(input){
    return input
            .sort()
            .map((n, i) => `${i + 1}.${n}`)
            .join('\n');
}

console.log(listProducts(['Potatoes', 'Tomatoes', 'Onions','Apples']));
console.log(listProducts(['Watermelon', 'Banana', 'Apples']));