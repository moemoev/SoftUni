function equalSums(arr){
    let leftSum = 0;
    let rightSum = 0;
    let index = null;

    for(let i = 0; i < arr.length; i++){
        
        if(arr.length === 1){
            index = 0;
            break;
        }
        else if(i === 0){
            leftSum = 0
            rightSum = arr.slice(1,arr.length).reduce((acc, val) => acc + val, 0);
        }else if(i === arr.length -1){
            rightSum = 0;
            leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        }else{
            leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
            rightSum = arr.slice(i + 1, arr.length).reduce((acc, val) => acc + val, 0);
        }

        if(leftSum === rightSum){
            index = i;
            break;
        }

    }
    if(index != null){
        console.log(index);
    }else{
        console.log(`no`)
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);