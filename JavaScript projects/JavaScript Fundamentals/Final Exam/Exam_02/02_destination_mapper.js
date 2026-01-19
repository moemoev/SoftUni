function solve(input){
    let regExp = /(=|\/)(?<city>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let distance = 0;

    let matches = input.matchAll(regExp);

    for (let match of matches){
        destinations.push(match.groups.city);
        distance += match.groups.city.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${distance}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");