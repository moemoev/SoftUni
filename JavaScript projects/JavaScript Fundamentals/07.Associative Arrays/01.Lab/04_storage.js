function solve(input){

    let storage = new Map();

    for (let el of input){
        
        let [product, quantity] = el.split(' ');

        if (!storage.has(product)){
            storage.set(product, Number(quantity));
        }else{
            let newQuantity = storage.get(product) + Number(quantity);
            storage.set(product, newQuantity);
        }
    }

    for (let [key, value] of storage.entries()){
        console.log(`${key} -> ${value}`);
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);

solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);