function passwordValidator(password){
    let result = '';

    pwLength(password);
    lettersDigits(password);
    pwContainsDigits(password);

    function pwLength(password){
        if (password.length < 6 || 10 < password.length){
            result += 'Password must be between 6 and 10 characters';
        }
    }

    function lettersDigits(password){
        for (let ch of password){
            let symbol = ch;

            if (!(symbol.toLowerCase() >= 'a' && symbol.toLowerCase() <= 'z') && !(symbol >= '0' && symbol <= '9') ){
                result += '\nPassword must consist only of letters and digits';
                return
            }
        }   
    }

    function pwContainsDigits(password){
        let countDigits = 0;

        for (let ch of password){
            if (ch >= '0' && ch <= '9')
                countDigits ++;

            if (2 <= countDigits){return;}
        }

        result += '\nPassword must have at least 2 digits';


    }

    if (result === ''){
        result = 'Password is valid';
    }
    return result;
}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));
