function solve(input){
    
    let inputLower = input.toLowerCase();
    let words = []
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < input.length; i++){

        if (input[i] !== inputLower[i]){
            endIndex = i;

            words.push(input.slice(startIndex, endIndex));
            startIndex = i; 
        }
    }
    words.push(input.slice(startIndex, input.length));

    console.log(words.join(', ').replace(', ', ''));

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
solve('AbCdE');
solve('A');