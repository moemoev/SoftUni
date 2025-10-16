function condense(arr){
    while(1 < arr.length){
        let condensedArr = [];
        for(let i = 0; i < arr.length - 1; i++){
            condensedArr.push(arr[i] + arr[i + 1])
        }
        arr = condensedArr;
    }
    console.log(arr[0]);
}
condense([2,10,3]);
condense([5,0,4,1,2]);
condense([1]);