function solve(wordToFind, text){
    
    let wordFound = false;

    for (let word of text.split(' ')){
        if (word.toLowerCase() === wordToFind){
            wordFound = true;
            break;
        }
    }

    if (wordFound){
        console.log(wordToFind);
    }else{
        console.log(`${wordToFind} not found!`);
    }

}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');