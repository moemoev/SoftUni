function maxNumber(arr){
    let topIntegers = [];

    for (let i = 0; i < arr.length - 1; i++){
        let isTop = true;

        for(let k = i + 1; k < arr.length; k++){    
            if(arr[i] <= arr[k]){
                isTop = false;
                break;
            }
        }
        if(isTop){
            topIntegers.push(arr[i]);
        }
}
    topIntegers.push(arr[arr.length - 1]);
    console.log(topIntegers.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);