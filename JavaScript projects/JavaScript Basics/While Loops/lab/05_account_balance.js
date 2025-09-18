function accountBalance(input){
    let index = 0;
    let totalMoney = 0;
    let operationsValid = true;

    while((input[index] != "NoMoreMoney") && operationsValid){
        if (Number(input[index]) < 0 ){
            console.log(`Invalid operation!`);
            operationsValid = false;
            break
        }

        totalMoney += Number(input[index]);

        console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
        index++;
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`)
}
//accountBalance(["5.51","69.42","100","NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);