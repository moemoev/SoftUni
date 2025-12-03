function solve(input){

    let wordOccurrences = new Map();
    let uniqueWords = new Set(input);

    for (let word of uniqueWords){
        
        wordOccurrences.set(word, 0);

        while(input.includes(word)){
            let newWordCount = wordOccurrences.get(word) + 1;

            wordOccurrences.set(word, newWordCount);

            let index = input.indexOf(word);
            
            input.splice(index,1);
        }
    }
    for (let [word, count] of Array.from(wordOccurrences.entries()).sort((a, b) => b[1] - a[1])){
        console.log(`${word} -> ${count} times`)
    }     

}

solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);
solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);