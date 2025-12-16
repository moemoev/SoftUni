function solve(input){

    let cmd = input.shift();
    let regExp = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+(\.\d+)?)\$/g
    let totalMoney = 0;

    while (cmd !== 'end of shift'){
        for (let match of cmd.matchAll(regExp)){
            let customer = match.groups.customer;
            let product = match.groups.product;
            let quantity = Number(match.groups.quantity);
            let price = Number(match.groups.price);

            console.log(`${customer}: ${product} - ${(quantity * price).toFixed(2)}`);

            totalMoney += quantity * price;
        }
        cmd = input.shift();
    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
solve(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);