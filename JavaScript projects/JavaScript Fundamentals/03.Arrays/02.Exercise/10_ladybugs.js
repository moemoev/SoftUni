function ladyBugs(input){
    
    let field = [];
    let dim = Number(input.shift());
    let bugsPositions = input
                        .shift()
                        .split(' ')
                        .map(Number);

    for (let i = 0; i < dim; i++){
        if (bugsPositions.includes(i)){
            field.push(1);
        }else{
            field.push(0);
        }
    }

    while (input.length !== 0){
        let moveDone = false;
        let cmd = input
                    .shift()
                    .split(' ');
        let startIndex = Number(cmd.shift());
        let direction = cmd.shift();
        let endIndex = Number(cmd.shift());

        if (field[startIndex] === 0 || (startIndex < 0 || startIndex >= dim)){
            continue
        }

        let destIndex = startIndex;

        while (!moveDone){
            
            if (endIndex === 0){
                moveDone = true;
                break;
            }

            if (direction === 'right'){
                destIndex += endIndex;
            }else{
                destIndex -= endIndex;
            }

            if (destIndex < 0 || destIndex >= dim){
                field[startIndex]= 0;
                moveDone = true;
                break;
            }

            if (field[destIndex] === 1){
                continue;
            }else{
                field[destIndex] = 1;
                field[startIndex]= 0;
                moveDone = true;
                break;
            }
        }
    }

    console.log(field.join(' '));
}
ladyBugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);

ladyBugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']);

ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']);