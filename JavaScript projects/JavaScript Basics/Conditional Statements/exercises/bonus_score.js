function bonusScore(score){
    let bonus = 0;
    if (score <= 100){
        bonus = 5;
    }else if (100 < score && score <= 1000){
        bonus = score * 0.2;
    }else{
        bonus = score * 0.1;
    }

    if (score % 2 === 0)
        bonus += 1;
    if (score % 10 != 0 && score % 5 == 0){
        bonus += 2;
    }
    console.log(`${bonus}`);
    console.log(`${bonus + score}`);
}   

bonusScore(55);