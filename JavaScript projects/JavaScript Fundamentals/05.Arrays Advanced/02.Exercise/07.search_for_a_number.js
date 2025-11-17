function searchNumber(sequence, commands){
    let countElements = commands.shift();
    let deleteElements = commands.shift();
    let searchElement = commands.shift();

    let subSequence = sequence.splice(0, countElements).splice(deleteElements);
    
    let occurencesElement = subSequence.filter((n) => n === searchElement);
    let count = occurencesElement.length
    console.log(`Number ${searchElement} occurs ${count} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);