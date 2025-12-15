function solve(input){

    let regexp = /(?<Day>\d{2})([.\/-])(?<Month>[A-Z][a-z]{2})\2(?<Year>\d{4})\b/g;

    let matches = input[0].matchAll(regexp);

    for (let match of matches){
        console.log(`Day: ${match.groups['Day']}, Month: ${match.groups['Month']}, Year: ${match.groups['Year']}`);
    }

}

solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);