function solve(input){
    let cmd = input.shift();
    let regExp = />>([A-Z][A-Za-z]+)<<(\d+)((\.)\d+)?!(\d+)/g;

    let furniture = [];
    let totalPrice = 0;

    while (cmd !=='Purchase'){
        let matches = cmd.matchAll(regExp);
        
        for (let match of matches){
            furniture.push(match[1]);
            let price = Number(match[2]);
            if (match[3] !== undefined){
                price += Number(match[3]);
            }
            let quantity = Number(match[5]);

            totalPrice += price * quantity; 
        }

        cmd = input.shift();
    }


    console.log(`Bought furniture:`);
    for (let el of furniture){
        console.log(el);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);

solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);

solve(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);