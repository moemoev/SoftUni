function trekkingMania(input){
    let countGroups = Number(input[0]);
    let musala = 0;
    let montblanc = 0;
    let kilimandscharo = 0;
    let k2 = 0;
    let everest = 0;
    let sumClimbers = 0;
    
    for (let i = 1; i <= countGroups; i++){
        let number = Number(input[i]);
        sumClimbers += number;
        switch (true){
            case (number < 6):
                musala += number; 
                break;
            case (number < 13):
                montblanc += number;
                break;
            case (number < 26):
                kilimandscharo += number;
                break;
            case (number < 41):
                k2 += number;
                break;
            case (14 <= number ):
                everest += number;
                break;
            default:
                break;
        }
    }
    console.log((musala / sumClimbers * 100).toFixed(2) + `%`);
    console.log((montblanc / sumClimbers * 100).toFixed(2) + `%`);
    console.log((kilimandscharo / sumClimbers * 100).toFixed(2) + `%`);
    console.log((k2 / sumClimbers * 100).toFixed(2) + `%`);
    console.log((everest / sumClimbers * 100).toFixed(2) + `%`);
}
trekkingMania(["10","10","5","1","100","12", "26", "17", "37", "40", "78"]);