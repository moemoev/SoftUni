function reverseString(string){
    let stringReversed = [];

    for (let i = string.length - 1; i >= 0; i--){
        stringReversed.push(string[i]);
    }

    console.log(stringReversed.join(""));
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");