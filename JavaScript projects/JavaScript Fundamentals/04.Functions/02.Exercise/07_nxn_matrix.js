function matrix(dim){
    let result = '';

    return addRow(dim);

    function addRow(dim){
        for (let i = 0; i < dim ;i++){
            result += printRow(dim);
        }
        return result;
    }

    function printRow(dim){
        let row = '';
        for (let i = 0; i < dim; i++){
            row += dim + ' '
        }
    
        return row.trim() + '\n';

    }
}
console.log(matrix(3));
console.log(matrix(7));
console.log(matrix(2));