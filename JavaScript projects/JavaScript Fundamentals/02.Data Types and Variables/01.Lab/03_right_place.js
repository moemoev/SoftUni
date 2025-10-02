function rightPlace(word, symbol, compare){
    word = word.replace('_', symbol);

    if(word === compare){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}