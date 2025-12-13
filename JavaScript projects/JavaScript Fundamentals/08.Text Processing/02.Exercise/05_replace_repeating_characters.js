function solve(input){

    let hasRepeats = true;

    while (hasRepeats){

        for (let i = 0; i < input.length; i ++){
            
            let ch = input[i];

            if (input.includes(ch.repeat(2))){
                input = input.replaceAll(ch.repeat(2), ch)
                break;
            } 
            if (i === input.length - 1){
                hasRepeats = false;
            }
        }
    }

    console.log(input);

}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');
