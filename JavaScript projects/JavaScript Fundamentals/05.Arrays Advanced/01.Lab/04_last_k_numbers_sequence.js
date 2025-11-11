function kSequence(countNumbers, countElements){
    result = [1];

    for (let i = 0; i < countNumbers - 1; i++){
        let sum = 0;
        for (let k = i - countElements + 1; k <= i; k++){
            if (k < 0){continue;}
            sum += result[k];
        }
        result.push(sum); 
    }
    console.log(`${result.join(" ")}`);
}
kSequence(6, 3);
kSequence(8, 2);