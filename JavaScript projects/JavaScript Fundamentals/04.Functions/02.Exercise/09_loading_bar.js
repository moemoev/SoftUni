function loadingBar(number){
    let progressedBar = '';
    let percentageLeft = 100 - number
    if (100 <= number){
        return '100% Complete!\n' + '[%%%%%%%%%%]'
    }else{
        progressedBar += `${number}% [`;
    }

    while (0 < number){
        addProgress();
        number -= 10;
    } 

    while (0 < (percentageLeft)){
        addRemainder();
        percentageLeft -= 10;
    } 
    
    return progressedBar + ']' + '\nStill loading...'

    
    function addProgress(){
        progressedBar += '%';
    }

    function addRemainder(){
        progressedBar += '.';
    }
}

console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));
