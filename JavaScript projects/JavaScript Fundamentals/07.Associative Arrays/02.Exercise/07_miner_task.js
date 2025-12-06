function solve(input){
    let minerGoods = new Map();

    for (let i = 0; i < input.length; i += 2){
        let material = input[i];
        let quantity = Number(input[i +1]);

        minerGoods.set(material, minerGoods.get(material) + quantity || quantity);
    }

    for(let [material, quantity] of minerGoods.entries()){
        console.log(`${material} -> ${quantity}`);
    }
}

solve([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]);

solve([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);