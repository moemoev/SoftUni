function solve(input, countedWord){

    let count = 0;

    for (let word of input.split(' ')){
        if (word === countedWord){
            count += 1;
        }
    }

    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');