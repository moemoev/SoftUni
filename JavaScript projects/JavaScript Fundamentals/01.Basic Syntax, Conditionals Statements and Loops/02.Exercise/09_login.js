function login(input){
    let userName = input.shift();
    let tryCount = 4;
    let passwordValid = false;

    while(tryCount > 0){
        let enteredPassword = input
                                .shift()
                                .split('')
                                .reverse()
                                .join('');
        if (userName === enteredPassword){
            passwordValid = true;
            break;
        }else if(tryCount !== 1){
            console.log('Incorrect password. Try again.')
        }
        tryCount--;
    }

    if (!passwordValid){
        console.log(`User ${userName} blocked!`);
    }else{
        console.log(`User ${userName} logged in.`);
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','notsunny']);