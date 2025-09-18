function tennisRanklist(input){
    let plays = Number(input[0]);
    let initPoints = Number(input[1]);
    let points = 0;
    let wins = 0;
    for (let i = 2; i < 2 + plays; i++){
        switch(input[i]){
            case "W":
                points += 2000;
                wins ++;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
            default:
                break;
        }
    }
    console.log(`Final points: ${points + initPoints}`);
    console.log(`Average points: ${Math.floor(points / plays)}`);
    console.log(`${((wins / plays) * 100).toFixed(2)}%`);
}
tennisRanklist(["5","1400","F","SF","W","W","SF"]);