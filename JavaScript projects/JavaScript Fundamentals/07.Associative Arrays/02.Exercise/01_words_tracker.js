function solve(input){

    let wordsCount = new Map();
    let words = input.shift().split(' ');

    for (let word of words){
        wordsCount.set(word, 0);       
    }

    for (let word of input){
        if (wordsCount.has(word)){
            wordsCount.set(word, wordsCount.get(word) + 1);
        }
    }

    let entries = Array.from(wordsCount.entries());

    for (let [word, occurence] of entries.sort((a, b) => b[1] - a[1])){
        console.log(`${word} - ${occurence}`)
    }

}

solve([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]);

solve([
'is the',
'first', 'sentence', 'Here', 'is',
'another', 'the', 'And', 'finally', 'the',
'the', 'sentence']);