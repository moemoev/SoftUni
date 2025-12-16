function solve(input){
    let regExp = /[A-Za-z]|[0-9]/g
    let participants = input.shift().split(', ');
    let cmd = input.shift();   
    let raceResult = new Map();

    while (cmd !== 'end of race'){
        let racer = [];
        let time = 0;

        let matches = cmd.match(regExp);

        for (let ch of matches){
            if (/[A-za-z]/.test(ch)){
                racer.push(ch);
            }else{
            time += Number(ch);
            }
        }
        let racerName = racer.join('');

        if (participants.includes(racerName)){
            let currentTime = raceResult.get(racerName) || 0;
            raceResult.set(racerName, currentTime + time);
        }

        cmd = input.shift()
    }
    let finish = Array.from(raceResult).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${finish[0][0]}`);
    console.log(`2nd place: ${finish[1][0]}`);
    console.log(`3rd place: ${finish[2][0]}`);
    
}

solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);