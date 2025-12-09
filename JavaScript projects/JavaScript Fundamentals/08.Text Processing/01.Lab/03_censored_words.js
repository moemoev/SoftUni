function solve(input, word){

    let symbol = '*'.repeat(word.length);

    let censored = input.replaceAll(word, symbol);

    console.log(censored);
}
solve('A small sentence with some small words', 'small');
solve('Find the hidden word', 'hidden');
