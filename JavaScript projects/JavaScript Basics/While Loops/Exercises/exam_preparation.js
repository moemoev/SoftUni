function examPreparation(input){
    let maxFails = Number(input[0])
    let fails = 0;
    let grade ;
    let index = 1;
    let sumgrades = 0;
    let testName = input[index];
    let needsBreak = false;

    while(testName != "Enough"){
        grade = Number(input[index+1])
        
        if (grade <= 4.00){
            fails++;
        }

        if (maxFails <= fails){
            needsBreak = true;
            break
        }
        sumgrades += grade ;
        index += 2;
        testName = input[index];
    }

    if (!needsBreak){
        let countTests = Math.trunc((input.length - 2) / 2)
        console.log(`Average score: ${(sumgrades / countTests).toFixed(2)}`);
        console.log(`Number of problems: ${countTests}`);
        console.log(`Last problem: ${input[index - 2]}`);
    }else{
        console.log(`You need a break, ${fails} poor grades.`);
    }
}
examPreparation(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"]);
examPreparation(["2","Income","3","GameInfo","6","BestPlayer","4"])