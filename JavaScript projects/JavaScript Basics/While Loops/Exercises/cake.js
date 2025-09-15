function cake(input){
    let countPieces = Number(input[0]) * Number(input[1]);
    let index = 2;
    let notEnoughPieces = false;
    let piecesNeeded;

    while(input[index] !== "STOP"){
        piecesNeeded = Number(input[index])
        if (countPieces < piecesNeeded){
            notEnoughPieces = true;
            break;
        }else{
            countPieces -= piecesNeeded;
        }

        index++;
    }
    if (notEnoughPieces){
        console.log(`No more cake left! You need ${piecesNeeded - countPieces} pieces more.`);
    }else{
        console.log(`${countPieces} pieces are left.`);
    }
}
cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);