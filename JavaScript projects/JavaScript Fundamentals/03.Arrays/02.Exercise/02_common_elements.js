function common(firstArr, secondArr){
    let commonElements = [];

    for(let elFirst of firstArr){
        for(let elSecond of secondArr){
            if(elFirst === elSecond){
                commonElements.push(elFirst);
            }
        }
    }
    for(let content of commonElements)
    console.log(`${content}`);
}   
common(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);