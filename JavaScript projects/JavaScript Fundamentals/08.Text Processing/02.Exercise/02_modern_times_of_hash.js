function solve(input){

    let specialWords = [];

    for (let word of input.split(' ')){
        if (1 < word.length  && word[0] === '#'){
            let specialCandidate = word.replace('#', '')

            let isSpecial = true;

            for (let ch of specialCandidate.split('')){
                if (ch.toLowerCase() < 'a'|| ch.toLowerCase() > 'z'){
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial){
            specialWords.push(specialCandidate);
            }
        }
        
    }
    for (let word of specialWords){
        console.log(word);
    }


}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');