function strictMonotone(input){
    let maxVal = input.shift();
    let output = [maxVal];

    while (input.length !== 0){
        if (maxVal <= input[0]){
            maxVal = input.shift();
            output.push(maxVal)
        }else{
            input.shift();
        }
    }
    console.log(output.join(" "));
}

strictMonotone([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
strictMonotone([ 1, 2, 3, 4]);
strictMonotone([ 20, 3, 2, 15, 6, 1]);