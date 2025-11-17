function bombNumbers(sequence, bomb){
    let bombElement = bomb.shift();
    let bombRange = bomb.shift();

    while(sequence.includes(bombElement) === true){

        let indBombElmnt = sequence.indexOf(bombElement);

        sequence.splice(Math.max(0, indBombElmnt - bombRange), Math.min(sequence.length, (2 * bombRange) + 1));

    }
    console.log(sequence.reduce((arr, curr) => arr + curr, 0 ));
}   

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1]);