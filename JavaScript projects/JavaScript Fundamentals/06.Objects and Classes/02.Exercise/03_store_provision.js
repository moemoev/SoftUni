function provisioning(initialStock, order){
    let stock = {};

    while (0 < initialStock.length){
        let product = initialStock.shift();
        let quantity = Number(initialStock.shift());

        stock[product] = quantity;

    }

    while (0 < order.length){
        let product = order.shift();
        let quantity = Number(order.shift());

        if (Object.keys(stock).includes(product)){
            stock[product] += quantity;
        }else{
            stock[product] = quantity;
        }
    }

    for (let [product, quantity] of Object.entries(stock)){
        console.log(`${product} -> ${quantity}`);
    } 
    
}
provisioning(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);

provisioning([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ],
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);