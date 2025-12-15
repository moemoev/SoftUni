function solve(input){

    let regexp = /(\b[A-Z][a-z]+) ([A-Z][a-z]+)\b/g;

    let matches = input.matchAll(regexp);

    let output = [];

    for (let match of matches){
        output.push(match[0]);
    }

    console.log(output.join(' '));

}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");