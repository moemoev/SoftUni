function chessboard(dim){

    let leftMostField;
    console.log('<div class="chessboard">');
    let iIndentation = '  ';
    let kIndentation = '    ';

    for (let i = 0; i < dim; i++){
        console.log(`${iIndentation}<div>`)
        if (i % 2 === 0){
            leftMostField = 'black';
        }else {
            leftMostField = 'white';
        }

        for (let k = 0; k < dim; k++){
            if (leftMostField === 'black' && k % 2 === 0){
                console.log(`${kIndentation}<span class="black"></span>`);
            }else if (leftMostField === 'black' && k % 2 === 1){
                console.log(`${kIndentation}<span class="white"></span>`);
            }else if (leftMostField === 'white' && k % 2 === 0){
                console.log(`${kIndentation}<span class="white"></span>`);
            }else{
                console.log(`${kIndentation}<span class="black"></span>`);
            }
        }
        console.log(`${iIndentation}</div>`);
    }
    console.log('</div>');
}
chessboard(3);