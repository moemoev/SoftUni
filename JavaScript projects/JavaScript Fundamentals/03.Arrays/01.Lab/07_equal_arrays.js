function equality(firstArr, secondArr){
    let is_equal = true;
    let index;
    let sum = 0;
    
    for(let i = 0; i < firstArr.length; i++){
        if(firstArr[i] == secondArr[i]){
            sum += Number(firstArr[i]);
        }else{
            is_equal = false;
            index = i;
            break;
        }
    }
    if(is_equal){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equality(['10','20','30'], ['10','20','30']);
equality(['1','2','3','4','5'], ['1','2','4','4','5']);
equality(['1'], ['10']);