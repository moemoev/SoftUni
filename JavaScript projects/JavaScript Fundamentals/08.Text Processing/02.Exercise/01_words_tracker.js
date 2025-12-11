function solve(sentence, text){

    let words = sentence.split(', ').sort((a, b) => b.length - a.length);

    for (let word of words){
        text = text.replaceAll('*'.repeat(word.length), word)
    }

    console.log(text);

}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');