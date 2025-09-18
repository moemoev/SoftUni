function combinations(first, second, magicNumber){
    let count = 0;
    let firstN;
    let secondN;
    let magicNumberFound = false;
    for (let i = first; i<= second ; i ++){
        for (let k = first; k <= second; k++){
            if (magicNumberFound) break;
            count ++;
            if ((i + k) === magicNumber){
                magicNumberFound = true;
                firstN = i;
                secondN = k; 
                break;
            }
        }
    }
    if (magicNumberFound){
        console.log(`Combination N:${count} (${firstN} + ${secondN} = ${magicNumber})`);
    }else{
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}
combinations(88,888,2000);