function oscars(input){
    let name = input[0];
    let points = Number(input[1]);
    let countJudges = Number(input[2]);
    
    for (let i = 3; i < input.length; i += 2){
        points += input[i].length * Number(input[i+1]) / 2;
        
        if (1250.5 < points){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`);
            return;
        }
    }
    
    
    console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`);
    
}
oscars(["Zahari Baharov","205",4,"Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);