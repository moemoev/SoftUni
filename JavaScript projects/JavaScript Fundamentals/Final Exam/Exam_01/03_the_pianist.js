function solve(input){
    let countInitial = Number(input.shift());
    let pieces = new Map();

    for (let i = 0; i < countInitial; i++){
        let [piece, composer, key] = input.shift().split('|');
        pieces.set(piece, [composer, key]);
    }

    let cmd = input.shift();
  
    while(cmd !== 'Stop'){
        cmd = cmd.split('|');
        let action = cmd.shift();
        let piece = cmd.shift();

        if (action === 'Add'){
            if (pieces.has(piece)){
                console.log(`${piece} is already in the collection!`);
            }else{
                let composer = cmd.shift();
                let key = cmd.shift();
                pieces.set(piece, [composer, key]);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }else if (action === 'Remove'){
            if (!pieces.has(piece)){
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }else{
                pieces.delete(piece);
                console.log(`Successfully removed ${piece}!`);
            }
        }else if (action === 'ChangeKey'){
            let newKey = cmd.shift();
            if (!pieces.has(piece)){
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }else{
                let [composer, oldKey] = pieces.get(piece);
                pieces.set(piece, [composer, newKey]);
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }

        cmd = input.shift();
    }

    for (let [piece, composerKey] of pieces.entries())
    console.log(`${piece} -> Composer: ${composerKey[0]}, Key: ${composerKey[1]}`);
}
solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]);
solve([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);