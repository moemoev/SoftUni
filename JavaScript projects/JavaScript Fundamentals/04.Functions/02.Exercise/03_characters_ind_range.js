function characterCode(firstChar, secondChar){
    let firstCharCode = firstChar.charCodeAt(0);
    let secondCharCode = secondChar.charCodeAt(0);
    let result = ''

    if (firstCharCode <= secondCharCode){
        printCharCodeRange(firstCharCode, secondCharCode)
    }else{
        printCharCodeRange(secondCharCode, firstCharCode);
    }

    function printCharCodeRange(x, y){
        for(let i = x + 1; i < y; i++){
            result += String.fromCharCode(i) + ' ';
        }
    }

    return result.trim();
}

console.log(characterCode('a', 'd'));
console.log(characterCode('#', ':'));
console.log(characterCode('C', '#'));