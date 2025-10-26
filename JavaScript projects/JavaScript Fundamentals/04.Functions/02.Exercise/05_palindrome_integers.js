function intPalindrome(numberArray){
    for (let i = 0; i < numberArray.length; i++){
        console.log(isPalindrome(numberArray[i]));   
    }
        function isPalindrome(number){
            while (number > 9){
                let lastDigit = number % 10;
                let firstDigit = Number(String(number)[0]);

                if (lastDigit != firstDigit){
                    return false;
                }

                number = Number(String(number).slice(1, String(number).length - 1));
            }
            return true;
        }
}

intPalindrome([123,323,421,121]);
intPalindrome([32,2,232,1010]);