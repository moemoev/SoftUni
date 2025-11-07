function magicMatrix(input){
let dim = input.length;
let magicSum = input[0].reduce((acc, num) => acc + num, 0);
let matrixIsMagic = true;


for (let i = 0; i < dim; i++){
    let vertSum = 0;
    let horizSum;
    
    for (let j = 0; j < dim; j++){
            vertSum += Number(input[j][i]);
    }

    horizSum = input[i].reduce((acc, num) => acc + num, 0)

    if (vertSum !== magicSum || horizSum !== magicSum){
        matrixIsMagic = false;
        break;
    }
}

console.log(matrixIsMagic);
};

magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
