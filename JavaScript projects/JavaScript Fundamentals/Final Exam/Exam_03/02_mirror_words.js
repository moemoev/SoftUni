function solve(input){
    let regExp = /(@|#)(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/g;
    let matches = input[0].matchAll(regExp);

    let pairs = [];
    let mirrorWords = [];

    for (let match of matches){
        let wordOne = match.groups.wordOne;
        let wordTwo = match.groups.wordTwo;

        if (wordOne.length === wordTwo.length);{
            pairs.push([wordOne, wordTwo]);
        }    
    }

    for (let pair of pairs){
        if (pair[0] === pair[1].split('').reverse().join('')){
            mirrorWords.push(pair.join(' <=> '));
        }
    }

    if (0 < pairs.length){
        console.log(`${pairs.length} word pairs found!`);
    }else{
        console.log(`No word pairs found!`);
    }

    if (0 < mirrorWords.length){
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '))
        
    }else{
        console.log(`No mirror words!`);
    }
}

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);