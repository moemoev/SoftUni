function combinations(number){
    let count = 0;
    for (let i = 0; i <= number; i++){
        for (let k = 0; k <= number; k++){
            for (let j= 0; j <= number; j++){
                if(i + j + k === number){
                    count ++
                }
            }
        }
    }
    console.log(count);
}   
combinations(25);