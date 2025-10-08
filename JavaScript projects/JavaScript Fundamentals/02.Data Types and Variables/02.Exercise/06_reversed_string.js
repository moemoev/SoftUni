function reverseString(string){
    let stringReversed = '';

    for(let i = string.length - 1; 0 <= i; i--){
        stringReversed += string[i];
    }
    console.log(`${stringReversed}`);
}