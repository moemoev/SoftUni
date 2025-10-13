function caseSensitive(letter){
    let unicodeValue = letter.charCodeAt(0);
    if(65 <= unicodeValue && unicodeValue <= 90){
        console.log('upper-case');
    }else if(97 <= unicodeValue && unicodeValue <= 122){
        console.log('lower-case')
    }
}