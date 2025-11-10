// using a resultArr = [] and appending prepending values into the new array would have saved code, time and frustration
// but this works too...

function negOrPos(numbersArr){
    numbersArr = numbersArr.map(Number);

    stepCount = numbersArr.length;

    let i = 0;

    while(0 < stepCount){
        
        let key;

        if (0 <= numbersArr[i]){
            key = Number(numbersArr.splice(i, 1));
            numbersArr.push(key);
        }else{
            key = Number(numbersArr.splice(i, 1));
            numbersArr.unshift(key);
            i++;
        }
        stepCount--;
    }
    while(numbersArr.length){
        console.log(`${numbersArr.shift()}`)
    }
}

negOrPos(['7', '-2', '8', '9']);
negOrPos(['3', '-2', '0', '-1']);