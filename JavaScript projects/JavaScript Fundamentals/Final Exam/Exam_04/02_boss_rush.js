function solve(input){
    let numberInputs = Number(input.shift());

    let regExp = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;
    
    for (let i = 0; i < numberInputs; i++){
        let text = input.shift();
        let match = text.match(regExp);

        if (match !== null){
            let name = match.groups.boss;
            let title = match.groups.title;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        }else{
            console.log('Access denied!');
        }
    }

}

solve(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);

solve(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);