function repeatString(string, count){
    let result = '';

    while(count > 0){
        result += string;
        count --;
    }
    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));