function addAndSub(arr){
    let summArr = 0;
    let sumArrMod = 0;
    let arrMod = [];

    for(let i = 0; i < arr.length; i++){
        let number = arr[i];

        if(number % 2 === 0){
            arrMod.push(number + i)
        }else{
            arrMod.push(number - i)
        }
        summArr += arr[i];
        sumArrMod += arrMod[i];
    }
    console.log(`[ ${arrMod.join(', ')} ]`);
    console.log(`${summArr}`);
    console.log(`${sumArrMod}`);
}
addAndSub([5, 15, 23, 56, 35]);
addAndSub([-5, 11, 3, 0, 2]);